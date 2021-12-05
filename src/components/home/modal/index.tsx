import LoginContainerPage from "./login/login.container"
import SignupContainerPage from "./signup";
import styled from "@emotion/styled";

import 'react-responsive-modal/styles.css';
import { Modal } from "react-responsive-modal";

import { ContextTypes } from "../homeContext";

const styles = {
    modalContainer : {
        display : 'flex',
        alignItems : 'center',
        justifyContent : 'center'
    }
}

export default function LoginAndSignupModalPage({
    toggleLoginModal,
    loginPage,
    openLoginModal,
    moveLoginPage,
    _saveUserInfo
} : ContextTypes) {
    
    return(
        <>
        {openLoginModal &&
            <Modal
                open={openLoginModal}
                onClose={toggleLoginModal}
                styles={styles}
                closeOnOverlayClick={false}
            >
                <ModalWrapper>
                    {loginPage.includes('login') &&
                        <LoginContainerPage 
                        />
                    }
                    
                    {loginPage.includes('signup') &&
                        <SignupContainerPage 
                            moveLoginPage={moveLoginPage}
                            loginPage={loginPage}
                            _saveUserInfo={_saveUserInfo}
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