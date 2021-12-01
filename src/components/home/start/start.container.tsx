import HomeStartUIPage from "./start.presenter"

export interface IProps {
    toggleModal : () => void
    loginModal : boolean
}

export default function HomeStartContainerPage({
    toggleModal,
    loginModal
} : IProps) {

    // 비로그인시에는 로그인창 띄우기
    const openModal = () => {
        if( loginModal === false ) {
            toggleModal();
        }
    }

    return(
        <HomeStartUIPage 
            openModal={openModal}
        />
    )
}