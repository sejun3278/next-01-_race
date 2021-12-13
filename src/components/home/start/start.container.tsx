import HomeStartUIPage from "./start.presenter"
import { ContextTypes } from "../homeContext";

export default function HomeStartContainerPage({
    toggleLoginModal,
    openLoginModal,
    moveLoginPage,
    resetUserInfo
} : ContextTypes) {

    // 비로그인시에는 로그인창 띄우기
    const openModal = () => {
        if( openLoginModal === false ) {
            resetUserInfo && resetUserInfo();
            toggleLoginModal && toggleLoginModal();
            moveLoginPage &&  moveLoginPage("login")();
        }
    }

    return(
        <HomeStartUIPage 
            openModal={openModal}
        />
    )
}