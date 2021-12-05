import SignupUIPage from "./part1.presenter"
import { ContextTypes } from "../../../homeContext";

import { loginApi } from "../../../../../common/api/login.api";
import { antdModals } from "../../../../../common/libraries/antd";

export default function SignupContainerPage({
    moveLoginPage,
    _saveUserInfo
} : ContextTypes) {

    let ing : boolean = false;
    const createUserInfo = async ( data : { 
        email : string, password : string, confirm : string
    }) => {
        if( ing ) 
            return antdModals("warning", "진행중입니다. 잠시만 기다려주세요.");

        // 비밀번호와 비밀번호 확인 일치여부
        if( data.password !== data.confirm )
            return antdModals("error", "비밀번호가 일치하지 않습니다.");

        if( !ing ) {
            ing = true;
            const overlapCheck = await loginApi.checkUserOverlap({ data : data.email }, "email");
            
            if( overlapCheck ) 
                antdModals("error", "사용중인 이메일입니다.");

            else {
                const inputs = { email : data?.email, password : data?.password };
                _saveUserInfo( inputs )

                moveLoginPage("signup/part2")();
            }
            ing = false;
        }
    }

    return(
        <SignupUIPage 
            sumbitSignup={createUserInfo}
        />
    )
}