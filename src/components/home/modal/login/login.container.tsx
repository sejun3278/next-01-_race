import LoginUIPage from "./login.presenter"

export interface IProps {
    loginModal : boolean
    toggleModal : () => void
}

export default function LoginContainerPage({
    loginModal,
    toggleModal

} : IProps) {

    // 로그인 창 닫기
    const closeModal = () => {
        if( loginModal ) {
            toggleModal();
        }
    }    

    return(
        <LoginUIPage
            closeModal={closeModal}
        />
    )
}