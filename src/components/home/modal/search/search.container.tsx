import SearchUIPage from "./search.presenter"
import { ContextTypes } from "../../homeContext"

export default function searchContainerPage({
    moveLoginPage,
    loginPage
} : ContextTypes) {
    const type = loginPage?.split("/")[1];
    const title = type === "email" ? "이메일 찾기" : "비밀번호 찾기";
    const notice = type === "email"
        ? "닉네임으로 이메일을 찾을 수 있습니다."
        : "이름과 전화번호가 등록된 계정만 확인이 가능합니다. <br /> 구글로 등록된 계정은 조회할 수 없습니다.";

    const submit = ( data : any ) => {


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