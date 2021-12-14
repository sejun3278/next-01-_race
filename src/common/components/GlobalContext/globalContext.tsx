import { useState, createContext } from "react";
import LoadingPage from "../loading";

export const initUserInfo : SaveUserInfo = {
    uid : "",
    email : "",
    password : "",
    name : "",
    nickname : "",
    phone : "",
    win : 0,
    lose : 0
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
}

export const GlobalContext = createContext({
    userInfo : initUserInfo,
    setUserInfo : ( _ : any ) => {},
    loginPage : "login",
    setLoginPage : ( _ : string) => {},
    openLoginModal : false,
    toggleLoginModal : () => {},
    loading : "",
    toggleLoading : ( _ : string ) => {}
});

import { GlobalContextIProps } from "./globalContext.types";

export default function GlobalContextPage({
    children
} : any) {
    // 로그인 모달창 열기(true) / 닫기(false)
    const [ openLoginModal, setOpenLoginModal ] = useState<boolean>(false)
    // login : 로그인 화면
    // signup : 계정등록 화면
    const [ loginPage, setLoginPage ] = useState<string>("login");
    // 유저 정보 저장하기
    const [ userInfo, setUserInfo ] = useState({});
    // 로딩 on/off
    const [ loading, setLoading ] = useState<string>("");

    // 모달창 on /
    const toggleLoginModal = () => {
        setOpenLoginModal(prev => !prev);
    }

    // 로딩창 on / off
    const toggleLoading = ( str : string ) => {
        if( str ) {
            return setLoading( str );
        }
        setLoading("");
    }

    const value : GlobalContextIProps = {
      userInfo,
      setUserInfo,
      loginPage,
      setLoginPage,
      openLoginModal,
      toggleLoginModal,
      loading,
      toggleLoading
    }

    return(
        <GlobalContext.Provider value={value}>
            { loading !== "" &&
                <LoadingPage 
                    loading={loading}
                />
            }
            {children}
        </GlobalContext.Provider>
    )
}