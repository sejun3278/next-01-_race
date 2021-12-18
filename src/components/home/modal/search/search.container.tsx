import SearchUIPage from "./search.presenter"
import { ContextTypes } from "../../homeContext"

export default function searchContainerPage({
    moveLoginPage,
    loginPage
} : ContextTypes) {
    const title = loginPage?.split("/")[1] === "email" ? "이메일 찾기" : "비밀번호 찾기";

    return(
        <SearchUIPage 
            loginPage={loginPage || ""}
            title={title}
        />
    )
}