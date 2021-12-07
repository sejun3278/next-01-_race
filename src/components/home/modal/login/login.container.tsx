import LoginUIPage from "./login.presenter"
import { loginApi } from "../../../../common/api/login.api";

export default function LoginContainerPage({
    // loginPage
}) {
    // 로그인 전송하기
    const submitLogin = async ( data : any ) => {
        console.log(data)

        // 유저 아이디 및 비밀번호 검증하기
        const loginResult = await loginApi.findUserLogin({
            email : data.email,
            password : data.password
        })

        console.log(loginResult)
    }

    return(
        <LoginUIPage
            submitLogin={submitLogin}
        />
    )
}