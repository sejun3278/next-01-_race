import LoginContainerPage from "./login/login.container"

import 'react-responsive-modal/styles.css';
import { Modal } from "react-responsive-modal";

export interface IProps {
    loginModal : boolean
    toggleModal : () => void
}

const styles = {
    modalContainer : {
        display : 'flex',
        alignItems : 'center',
        justifyContent : 'center'
    }
}

export default function LoginAndSignupModalPage({
    loginModal,
    toggleModal
} : IProps) {
    return(
        <>
        {loginModal &&
            <Modal
                open={loginModal}
                onClose={toggleModal}
                styles={styles}
                closeOnOverlayClick={false}
            >
                <LoginContainerPage 
                    loginModal={loginModal}
                    toggleModal={toggleModal}
                />
            </Modal>
        }            
        </>
    )
}