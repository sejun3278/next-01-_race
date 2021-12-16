import SignupPart2UIPage from "./part2.presenter";

import { useContext, useEffect } from "react";
import { HomeContext } from "../../../homeContext";
import { GlobalContext } from "../../../../../common/components/GlobalContext/globalContext";

import { loginApi } from "../../../../../common/api/login.api";
import { antdModals } from "../../../../../common/libraries/antd";

interface IProps {
    moveLoginPage : any
}

export default function SignupPart2ContainerPage({
    moveLoginPage
} : IProps) {
    const { saveUserInfo, googleLogin } = useContext(HomeContext);
    const { toggleLoading, setUserInfo } = useContext(GlobalContext);
    
    let submit = false;
    const createUserData = async ( data : { nickname : string, name ?: string, phone ?: string } ) => {
        if( submit ) return antdModals("warning", "진행중입니다. 잠시만 기다려주세요.");

        // 이메일 중복 체크
        const emailCheck = await loginApi.checkUserOverlap( { data : saveUserInfo.email || "" }, "email" );
        if( emailCheck ) return antdModals("error", "이미 사용중인 이메일입니다.");
        
        // 닉네임 중복 체크
        const nicknameCheck = await loginApi.checkUserOverlap( { data : data.nickname }, "nickname" );
        if( nicknameCheck ) return antdModals("error", "이미 사용중인 닉네임입니다.");

        // 데이터 합치기
        const inputs = {...saveUserInfo, ...data};

        // 새 계정 생성하기
        submit = true;

        toggleLoading("계정을 등록하고 있습니다. 잠시만 기다려주세요.");
        const createResult = await loginApi.createUser( inputs );
        // 생성 후 :: loading 없애기
        toggleLoading("");

        if( createResult.success ) {
            // 로그인 페이지로 이동
            moveLoginPage("login")();
            return antdModals("success", "계정이 등록되었습니다.");
        }
        submit = false;
    }
    
    // 유저 정보 수정하기
    const modifyUserData = async ( data : { nickname : string, name ?: string, phone ?: string } ) => {
        if( submit ) return antdModals("warning", "진행중입니다. 잠시만 기다려주세요.");

        if( googleLogin ) {
            // 닉네임 수정하기

            // 닉네임 중복 체크
            const nicknameCheck = await loginApi.checkUserOverlap( { data : data.nickname }, "nickname" );
            if( nicknameCheck ) return antdModals("error", "이미 사용중인 닉네임입니다.");

            const inputs = { ...saveUserInfo, ...data };
            await loginApi.updateUserInfo( inputs, saveUserInfo.uid || "" );

            const getUserInfo = await loginApi.getUserInfo(saveUserInfo.email || "");
            console.log(getUserInfo)
            setUserInfo(getUserInfo);
        }
    }

    return(
        <SignupPart2UIPage 
            sumbit={googleLogin ? modifyUserData : createUserData}
        />
    )
}