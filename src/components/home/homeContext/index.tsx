import { createContext, useState } from "react"
export const HomeContext = createContext({
    loginPage : "login",
    toggleLoginModal : () => {},
    openLoginModal : false,
    moveLoginPage : ( _ : string ) => () => {}
});

import HomeTitleUIPage from "../title/HomeTitle.presenter"
import HomeStartPage from "../start/start.container";
import LoginAndSignupModalPage from "../modal";

export default function homeContextPage({
    children
}) {
    const [ openLoginModal, setOpenLoginModal ] = useState<boolean>(false)
    // login : 로그인 화면
    // signup : 계정등록 화면
    const [ loginPage, setLoginPage ] = useState<string>("login");
    // 유저 정보 저장하기

    // 로그인 모달창 열고(true) 닫기(false);
    const toggleLoginModal = () => {
        setOpenLoginModal( prev => !prev );
    }

    // 로그인 페이지 이동
    const moveLoginPage = ( page : string ) => () => {
        setLoginPage(page);
    }

    return(
        <HomeContext.Provider value={{
            openLoginModal,
            loginPage,
            toggleLoginModal,
            moveLoginPage
        }}>
            <HomeTitleUIPage />
            <HomeStartPage 
                openLoginModal={openLoginModal}
                toggleLoginModal={toggleLoginModal} 
                moveLoginPage={moveLoginPage}
            />
            <LoginAndSignupModalPage 
                toggleModal={toggleLoginModal}
                loginPage={loginPage}
                openLoginModal={openLoginModal}
                moveLoginPage={moveLoginPage}
            />
            {children}  
        </HomeContext.Provider>
    )
}

export interface ContextTypes {
    loginPage?: string
    toggleLoginModal?: () => void
    openLoginModal?: boolean
    moveLoginPage?: ( page : string ) => () => void
}