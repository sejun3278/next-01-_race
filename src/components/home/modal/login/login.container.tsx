import { useContext } from "react";
import { GlobalContext } from "src/common/components/GlobalContext/globalContext";

import LoginUIPage from "./login.presenter"
import { loginApi } from "../../../../common/api/login.api";
import { antdModals } from "src/common/libraries/antd";

export default function LoginContainerPage({
    // loginPage
}) {
    const { setUserInfo, userInfo } = useContext( GlobalContext );

    let logining = false;
    // 로그인 전송하기
    const submitLogin = async ( data : any ) => {
        if( logining || userInfo.email ) return antdModals( "warning", "진행중입니다. 잠시만 기다려주세요." );
        logining = true;

        // 유저 아이디 및 비밀번호 검증하기
        const loginResult = await loginApi.findUserLogin({
            email : data.email,
            password : data.password
        })
        setUserInfo( loginResult );

        logining = false;
    }

    return(
        <LoginUIPage
            submitLogin={submitLogin}
        />
    )
}