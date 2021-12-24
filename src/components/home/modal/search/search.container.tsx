import SearchUIPage from "./search.presenter"
import { ContextTypes } from "../../homeContext"

import { antdModals, antdMessage } from "src/common/libraries/antd";
import { loginApi } from "src/common/api/login.api";

import { SaveUserInfo } from "src/common/components/GlobalContext/globalContext";
import { useState } from "react";

export default function SearchContainerPage({
    moveLoginPage,
    loginPage
} : ContextTypes) {
    const [ complate, setComplate ] = useState<boolean>(false);
    const [ result, setResult ] = useState<string>("");

    const type : string = loginPage?.split("/")[1] || "";
    const title : string = type === "email" ? "이메일 찾기" : "비밀번호 찾기";
    let notice : string = type === "email"
        ? "닉네임으로 이메일을 찾을 수 있습니다."
        : "이름과 전화번호가 등록된 계정만 확인이 가능합니다. <br /> 구글로 등록된 계정은 조회할 수 없습니다.";
    if( complate ) {
        notice = "";
    }

    let checking : boolean = false;
    const submit = async ( data : { nickname?: string } ) => {
        if( checking ) return antdModals("warning", "진행중입니다. 잠시만 기다려주세요.")
        checking = true;

        if( type === "email" ) {
            const checkEmail : SaveUserInfo = await loginApi.searchEmail( data.nickname || "" );

            if( checkEmail.email === undefined ) {
                antdModals("error", "계정 정보를 찾을 수 없습니다.");

            } else {
                setComplate(true);
                setResult( checkEmail.email );
                antdMessage("success", "이메일이 조회되었습니다.");
            }

        } else if( type === "password" ) {

        }

        checking = false;
    }

    return(
        <>
            <SearchUIPage 
                submit={submit}
                props={{ 
                    type : type || "",
                    title,
                    notice,
                    complate,
                    result
                }}
                yapName={type || ""}
            />
        </>
    )
}