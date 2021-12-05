import { firebaseApp } from "../../../pages/_app";
import {
    collection,
    getFirestore,
    addDoc,
    query,
    where,
    getDocs
} from "@firebase/firestore"
import { 
    getAuth, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword,
} from "firebase/auth"

import { antdModals } from "../libraries/antd";
import { SaveUserInfo } from "../../components/home/homeContext";

const userTable = collection(getFirestore(firebaseApp), "user");
const auth = getAuth();

// 로그인 api
export const loginApi = {
    getUserEmail : ( id : string ) => {
        return `${id}@gmail.com`
    },

    // 유저 생성하기
    createUser : async ( inputs : SaveUserInfo ) => {
        const result = { success : false, data : { uid : "" } };

        // 아이디 중복 체크하기
        const overlapUserId = await loginApi.checkUserOverlap({ data : inputs.email }, "email");
        if( overlapUserId ) {
            antdModals("error", "이미 사용중인 이메일입니다.");
            return result;
        }

        // 닉네임 중복 체크하기
        const overlapNickname = await loginApi.checkUserOverlap({ data : inputs.nickname }, "nickname");
        if( overlapNickname ) {
            antdModals("error", "이미 사용중인 닉네임입니다.");
            return result;
        }

        await createUserWithEmailAndPassword(auth, inputs.email, inputs.password)
        .then( async(data) => {
            result.success = true;
            // uid 추가하기
            inputs.uid = data?.user.uid;

            // 비밀번호 제거
            delete inputs.password;

            await loginApi.createUserInfo(inputs)
        })
        .catch( err => {
            if( JSON.stringify(err).includes('auth/email-already-in-use') ) {
                antdModals("error", "이미 사용중인 이메일입니다.");
            }
        })

        return result;
    },

    // 유저 정보 저장하기
    createUserInfo : async( inputs : SaveUserInfo ) => {
        await addDoc(userTable, inputs);
    },

    // 중복 체크
    checkUserOverlap : async( inputs : { data : string }, column : string ) => {
        let overlap = false;

        const overlapQuery = query( userTable, where(column, "==", inputs.data) );
        const result = await getDocs( overlapQuery );
        result?.forEach( el => {
            const data = el.data();

            if( data ) {
                overlap = true;
            }
        })

        return overlap;
    },

    // 로그인
    findUserLogin : async ( inputs : { email : string, password : string } ) => {
        let uid = ""

        await signInWithEmailAndPassword( auth, inputs.email, inputs.password )
        .then( res => {
            uid = res.user.uid;
        })
        .catch( err => {
            if( err instanceof Error ) {
                console.log(err)
                antdModals("error", "아이디 또는 비밀번호를 다시 확인해주세요.");
            }
        })

        return uid;
    },
}