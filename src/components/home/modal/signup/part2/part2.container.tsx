import SignupPart2UIPage from "./part2.presenter";

import { useContext } from "react";
import { HomeContext } from "../../../homeContext";
import { GlobalContext } from "../../../../../common/components/GlobalContext/globalContext";

import { loginApi } from "../../../../../common/api/login.api";
import { antdModals } from "../../../../../common/libraries/antd";

export default function SignupPart2ContainerPage({
    _saveUserInfo
}) {
    const { saveUserInfo } = useContext(HomeContext);
    const { toggleLoading } = useContext(GlobalContext)

    let submit = false;
    const sumbit = async ( data : { nickname : string, name ?: string, phone ?: string } ) => {
        if( submit ) return antdModals("warning", "진행중입니다. 잠시만 기다려주세요.");

        // 닉네임 중복 체크
        const check = await loginApi.checkUserOverlap( { data : data.nickname }, "nickname" );
        if( check ) return antdModals("error", "이미 사용중인 닉네임입니다.");

        // 데이터 합치기
        const inputs = {...saveUserInfo, ...data};

        // 새 계정 생성하기
        submit = true;

        toggleLoading("asaasd")
        // const createResult = await loginApi.createUser( inputs );

        // console.log(createResult)
        // if( createResult.success ) {
        //     return antdModals("success", "계정이 등록되었습니다.");
        // }
        submit = false;
    }

    return(
        <SignupPart2UIPage 
            sumbit={sumbit}
        />
    )
}