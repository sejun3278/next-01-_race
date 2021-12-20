import SearchUIPage from "./search.presenter"
import { ContextTypes } from "../../homeContext"

import { antdModals } from "src/common/libraries/antd";
import { loginApi } from "src/common/api/login.api";

import { SaveUserInfo } from "src/common/components/GlobalContext/globalContext";

export default function searchContainerPage({
    moveLoginPage,
    loginPage
} : ContextTypes) {

    const type = loginPage?.split("/")[1];
    const title = type === "email" ? "이메일 찾기" : "비밀번호 찾기";
    const notice = type === "email"
        ? "닉네임으로 이메일을 찾을 수 있습니다."
        : "이름과 전화번호가 등록된 계정만 확인이 가능합니다. <br /> 구글로 등록된 계정은 조회할 수 없습니다.";

    let checking = false;
    const submit = async ( data : any ) => {
        if( checking ) return antdModals("warning", "진행중입니다. 잠시만 기다려주세요.")
        checking = true;

        if( type === "email" ) {
            const checkEmail : SaveUserInfo = await loginApi.searchEmail( data.nickname );

            if( checkEmail.email === undefined ) {
                antdModals("warning", "계정 정보를 찾을 수 없습니다.");
            }

        } else if( type === "password" ) {

        }

        checking = false;
    }

    return(
        <SearchUIPage 
            submit={submit}
            props={{ 
                type : type || "",
                title,
                notice
            }}
            yapName={type || ""}
        />
    )
}