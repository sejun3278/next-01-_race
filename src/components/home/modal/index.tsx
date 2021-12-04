import LoginContainerPage from "./login/login.container"
import SignupContainerPage from "./signup/signup.container";
import styled from "@emotion/styled";

import 'react-responsive-modal/styles.css';
import { Modal } from "react-responsive-modal";

export interface IProps {
    toggleModal : () => void
    loginPage : string
    openLoginModal : boolean
    moveLoginPage : ( page : string ) => () => void
}

const styles = {
    modalContainer : {
        display : 'flex',
        alignItems : 'center',
        justifyContent : 'center'
    }
}

export default function LoginAndSignupModalPage({
    toggleModal,
    loginPage,
    openLoginModal,
    moveLoginPage
} : IProps) {
    
    return(
        <>
        {openLoginModal &&
            <Modal
                open={openLoginModal}
                onClose={toggleModal}
                styles={styles}
                closeOnOverlayClick={false}
            >
                <ModalWrapper>
                    {loginPage === 'login' &&
                        <LoginContainerPage 
                            loginModal={openLoginModal}
                            toggleModal={toggleModal}
                            moveLoginPage={moveLoginPage}
                        />
                    }
                    
                    {loginPage === 'signup' &&
                        <SignupContainerPage 
                            moveLoginPage={moveLoginPage}
                        />
                    }
                </ModalWrapper>
            </Modal>
        }            
        </>
    )
}

const ModalWrapper = styled.div`
    width : 600px;
    height : 600px;
`