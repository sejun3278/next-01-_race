import LoginContainerPage from "./login/login.container"
import SignupContainerPage from "./signup";
import ModalSearchPage from "./search/search.container";
import BackLogin from "../backLogin";

import styled from "@emotion/styled";
import { breakPoints } from "src/common/styles/responsive";

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
            <_Modal
                open={openLoginModal}
                // @ts-ignore
                onClose={toggleLoginModal}
                styles={styles}
                closeOnOverlayClick={false}
                classNames={{ overlay : "LoginModal" }}
            >
                <ModalWrapper>
                    {loginPage && loginPage !== "login" &&
                        <BackLogin />
                    }

                    {loginPage && loginPage.includes('login') &&
                        <LoginContainerPage 
                        />
                    }
                    
                    {loginPage && loginPage.includes('signup') &&
                        <SignupContainerPage 
                            moveLoginPage={moveLoginPage}
                            loginPage={loginPage}
                            _saveUserInfo={_saveUserInfo}
                        />
                    }

                    {loginPage && loginPage.includes("search") &&
                        <ModalSearchPage 
                            moveLoginPage={moveLoginPage}
                            loginPage={loginPage}
                        />
                    }
                </ModalWrapper>
            </_Modal>
        }            
        </>
    )
}

const ModalWrapper = styled.div`
    width : 600px;
    height : 600px;

    @media ${breakPoints.mobile} {
        width : auto;
        height : auto;
    }
`

const _Modal = styled(Modal)`
    
`