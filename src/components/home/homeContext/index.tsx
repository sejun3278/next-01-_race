import { createContext, useState } from "react";

const initUserInfo : SaveUserInfo = {
    uid : "",
    email : "",
    password : "",
    name : "",
    nickname : "",
    phone : "",
    win : 0,
    lose : 0,
    googleUid : ""
}

export interface SaveUserInfo {
    uid?: string
    email?: string
    password?: string
    nickname?: string
    name?: string
    phone?: string
    win?: number
    lose?: number
    googleUid?: string
}

export const HomeContext = createContext({
    loginPage : "login",
    toggleLoginModal : () => {},
    openLoginModal : false,
    moveLoginPage : ( _ : string ) => () => {},
    saveUserInfo : initUserInfo,
    _saveUserInfo : ( _ : SaveUserInfo ) => {},
    resetUserInfo : () => {}
});

import HomeTitleUIPage from "../title/HomeTitle.presenter"
import HomeStartPage from "../start/start.container";
import LoginAndSignupModalPage from "../modal";

export default function homeContextPage({
    children
}) {
    const [ openLoginModal, setOpenLoginModal ] = useState<boolean>(false)
    // 2 : 로그인 화면
    // 3 : 계정등록 화면
    const [ loginPage, setLoginPage ] = useState<string>("login");
    // 유저 데이터 저장
    const [ saveUserInfo, setSaveUserInfo ] = useState<SaveUserInfo>(initUserInfo);

    // 로그인 모달창 열고(true) 닫기(false);
    const toggleLoginModal = () => {
        setOpenLoginModal( prev => !prev );
    }

    // 로그인 페이지 이동
    const moveLoginPage = ( page : string ) => () => {
        setLoginPage(page);
    }

    // 유저 정보 저장하기
    const _saveUserInfo = ( inputs : SaveUserInfo ) => {
        const saveInfo = { ...saveUserInfo };

        Object.entries( inputs ).forEach( obj => {
            const key = obj[0];
            const value = obj[1];

            saveInfo[key] = value;
        })

        setSaveUserInfo( saveInfo );
    }

    // 유저 정보 초기화
    const resetUserInfo = () => {
        setSaveUserInfo( initUserInfo );
    }

    return(
        <HomeContext.Provider value={{
            openLoginModal,
            loginPage,
            toggleLoginModal,
            moveLoginPage,
            saveUserInfo,
            _saveUserInfo,
            resetUserInfo
        }}>
            <HomeTitleUIPage />
            <HomeStartPage 
                openLoginModal={openLoginModal}
                toggleLoginModal={toggleLoginModal} 
                moveLoginPage={moveLoginPage}
                resetUserInfo={resetUserInfo}
            />
            <LoginAndSignupModalPage 
                toggleLoginModal={toggleLoginModal}
                loginPage={loginPage}
                openLoginModal={openLoginModal}
                moveLoginPage={moveLoginPage}
                _saveUserInfo={_saveUserInfo}
            />
            {children}  
        </HomeContext.Provider>
    )
}

export interface ContextTypes {
    openLoginModal?: boolean
    toggleLoginModal?: () => void
    loginPage?: string
    moveLoginPage?: ( page : string ) => () => void
    _saveUserInfo?: ( inputs : SaveUserInfo ) => void
    resetUserInfo?: () => void
}