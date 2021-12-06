import { Dispatch, SetStateAction } from "react";

export interface GlobalContextIProps {
    userInfo : any
    setUserInfo : Dispatch<SetStateAction<{}>>
    loginPage : string
    setLoginPage : Dispatch<SetStateAction<{}>>
    openLoginModal : boolean
    toggleLoginModal : () => void
    loading : string
    toggleLoading : ( str : string ) => void
}