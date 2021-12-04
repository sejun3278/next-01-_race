import SignupUIPage from "./signup.presenter"
import { ContextTypes } from "../../homeContext";

import { loginApi } from "../../../../common/api/login.api";
import { antdModals } from "../../../../common/libraries/antd";

export default function SignupContainerPage({
} : ContextTypes) {

    let ing : boolean = false;
    const createUserInfo = async ( data : { 
        id : string, nickname : string, password : string, confirm : string
    }) => {
        if( ing ) return antdModals("warning", "진행중입니다. 잠시만 기다려주세요.")
        if( !ing ) {
            ing = true;
            const result = await loginApi.createUser({ id : data.id, password : data.password, nickname : data.nickname });

            if( result.success ) {
                antdModals("success", "계정이 등록되었습니다.");

                return;
            }
        }

        window.setTimeout( () => {
            ing = false;
        }, 2000)
    }

    return(
        <SignupUIPage 
            sumbitSignup={createUserInfo}
        />
    )
}