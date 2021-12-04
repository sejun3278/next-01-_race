import LoginUIPage from "./login.presenter"
import { loginApi } from "../../../../common/api/login.api";

import { ContainerIProps } from "./login.types";

export default function LoginContainerPage({
    loginModal,
    toggleModal,
    moveLoginPage

} : ContainerIProps) {
    // // 로그인 창 닫기
    // const closeModal = () => {
    //     if( loginModal ) {
    //         toggleModal();
    //     }
    // }    

    // 로그인 전송하기
    const submitLogin = async ( data : any ) => {
        // 유저 아이디 및 비밀번호 검증하기
        const loginResult = await loginApi.findUserLogin({
            id : data.id,
            password : data.password
        })
    }

    return(
        <LoginUIPage
            submitLogin={submitLogin}
        />
    )
}