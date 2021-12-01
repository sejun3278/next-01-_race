import Template from "../../common/components/template"
import HomeTitleUIPage from "./title/HomeTitle.presenter"
import HomeStartPage from "./start/start.container";
import LoginAndSignupModalPage from "./modal";

import { useState } from "react";

export default function MainHome() {
    const [ loginModal, setLoginModal ] = useState( false );

    // 로그인 창 토글
    const toggleModal = () => {
        setLoginModal( prev => !prev );
    }

    return(
        <Template>
            <HomeTitleUIPage />
            <HomeStartPage 
                loginModal={loginModal}
                toggleModal={toggleModal} 
            />
            {loginModal &&
                <LoginAndSignupModalPage 
                    loginModal={loginModal}
                    toggleModal={toggleModal}
                />
            }
        </Template>
    )
}