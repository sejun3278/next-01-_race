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

const userTable = collection(getFirestore(firebaseApp), "user");
const auth = getAuth();

// 로그인 api
export const loginApi = {
    getUserEmail : ( id : string ) => {
        return `${id}@gmail.com`
    },

    // 유저 생성하기
    createUser : async ( inputs : { id : string, password : string, nickname : string } ) => {
        const result = { success : false, data : { uid : "" } };

        // 아이디 중복 체크하기
        const overlapUserId = await loginApi.checkUserOverlap({ data : inputs.id }, "id");
        if( overlapUserId ) {
            antdModals("error", "이미 사용중인 아이디입니다.");
            return result;
        }

        // 닉네임 중복 체크하기
        const overlapNickname = await loginApi.checkUserOverlap({ data : inputs.nickname }, "nickname");
        if( overlapNickname ) {
            antdModals("error", "이미 사용중인 닉네임입니다.");
            return result;
        }

        await createUserWithEmailAndPassword(auth, `${inputs.id}@gmail.com`, inputs.password)
        .then( async(data) => {
            result.success = true;
            result.data.uid = data.user.uid;

            await loginApi.createUserInfo({ uid : data.user.uid, id : inputs.id, nickname : inputs.nickname })
        })
        .catch( err => {
            if( JSON.stringify(err).includes('auth/email-already-in-use') ) {
                antdModals("error", "이미 사용중인 아이디입니다.");
            }
        })

        return result;
    },

    // 유저 정보 저장하기
    createUserInfo : async( inputs : { uid : string, id : string, nickname : string } ) => {
        await addDoc(userTable, {
            uid : inputs.uid,
            id : inputs.id,
            nickname : inputs.nickname,
            win : 0,
            lose : 0,
            googleLogin : false
        })
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
    findUserLogin : async ( inputs : { id : string, password : string } ) => {
        let uid = ""

        await signInWithEmailAndPassword( auth, loginApi.getUserEmail(inputs.id), inputs.password )
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