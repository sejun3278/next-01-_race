import { useContext } from "react";
import { HomeContext } from "../../../../components/home/homeContext";

import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

import { antdModals } from '../../../libraries/antd';
import { loginApi } from '../../../api/login.api';

import Button from '../button';

export default function GoogleLoginButton() {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();

    const { saveUserInfo } = useContext(HomeContext)

    // 구글 팝업 로그인
    const googleLogin = async () => {

    signInWithPopup( auth, provider )
        .then( async(result) => {
            GoogleAuthProvider.credentialFromResult(result);

            // 비밀번호 제거하기
            const { password, ...inputs } = saveUserInfo;

            const craeteUserInfo = await loginApi.createGoogleLogin({
                ...inputs,
                uid : result.user.uid,
                email : result.user.email,
                name : result.user.displayName,
                phone : result.user.phoneNumber || ""
            })

            console.log(craeteUserInfo)
        })
        .catch( err => {
            GoogleAuthProvider.credentialFromError(err);

            console.log(err)
            antdModals( "error", "구글 로그인에 실패하셨습니다." );
        })
    }

    return(
        <Button
            title="구글 로그인"
            styles={{ margin : "0px", border : "none", fontSize : '16px', backgroundColor : "white",
                      borderRadius : "2px", padding : "5px 10px 5px 10px", marginTop : "5px", borderBottom : "solid #ababab 1px",
                      color : "black"
                    }}
            icon="/images/commons/icons/googleIcon.png"
            reverse={true}
            iconStyles={{ width : "25px", height : "25px", marginRight : "8px" }}
            clickEvent={googleLogin}
        />
    )
}