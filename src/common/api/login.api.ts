import { firebaseApp } from "../../../pages/_app";
import {
    collection,
    getFirestore,
    addDoc,
    query,
    where,
    getDocs,
    updateDoc
} from "@firebase/firestore"
import { 
    getAuth, 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
} from "firebase/auth"

import { antdModals } from "../libraries/antd";
import { SaveUserInfo } from "../components/GlobalContext/globalContext";

const userTable = collection(getFirestore(firebaseApp), "user");
const auth = getAuth();

// 로그인 api
export const loginApi = {

    // 유저 정보 가져오기
    getUserInfo : async ( email : string ) => {
        let userInfo = {};

        const userInfoQuery = query( userTable, where("email", "==", email) );
        (await getDocs( userInfoQuery )).forEach( el => {
            userInfo = el.data();
        })

        return userInfo;
    },

    // 유저 생성하기
    createUser : async ( inputs : SaveUserInfo ) => {
        const result = { success : false, data : { uid : "" } };

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

        return inputs;
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
        let hasUser = false;

        await signInWithEmailAndPassword( auth, inputs.email, inputs.password )
        .then( _ => {
            hasUser = true;
        })
        .catch( err => {
            if( err instanceof Error ) {
                console.log(err)
                antdModals("error", "아이디 또는 비밀번호를 다시 확인해주세요.");
            }
        })

        return hasUser;
    },

    // 구글 로그인 시, 계정 생성하기
    createGoogleLogin : async ( inputs : { email : string, uid : string, name : string, phone : string } ) => {
        // 등록한 계정이 있는지 확인한다.
        const checkUserInfo = await loginApi.checkUserOverlap({ data : inputs.uid }, "uid");

        // 있을 경우에는 로그인 완료
        if( checkUserInfo ) return true;
        
        // 없을 경우 기본 정보는 추가한다.
        await loginApi.createUserInfo( inputs );

        return false;
    },

    // 닉네임 수정하기
    updateNickname : async( nickname : string ) => {
    }
}