import { ContextTypes } from "../../homeContext"
import styled from "@emotion/styled";
import { breakPoints } from "src/common/styles/responsive";

import SignupContainerPage from "./part1/part1.container"
import SignupPart2ContainerPage from "./part2/part2.container";
import ModalTitle from "../commons/title";

import { useEffect, useContext } from "react";
import { HomeContext } from "../../homeContext";

export default function SignupPage({
    loginPage,
    moveLoginPage,
    _saveUserInfo
} : ContextTypes) {
    const { saveUserInfo } = useContext(HomeContext);

    useEffect( () => {
        if( saveUserInfo.email !== "" ) {
            if( saveUserInfo.nickname === "" ) {
                moveLoginPage && moveLoginPage("signup/part2")();
            }
        }
    }, [saveUserInfo])

    return(
        <>
            <ModalTitle 
                title="<h2> 계정 등록 </h2>"
            />

            {loginPage && loginPage.includes("/part1") &&
                <SignupContainerPage 
                    moveLoginPage={moveLoginPage}
                    _saveUserInfo={_saveUserInfo}
                />
            }

            {loginPage && loginPage.includes("/part2") && 
                <SignupPart2ContainerPage
                    moveLoginPage={moveLoginPage}
                />
            }
        </>
    )
}

const TitleWrapper = styled.div`
    display : flex;
    flex-direction : column;
    align-items : center;
    padding : 23px 0px;
    border-bottom : solid 1px black;

    h2 {
        font-size : 30px;
        font-weight : 500;
    }

    @media ${breakPoints.mobile} {
        padding : 10px 0px;

        h2 {
            font-size : 20px;
        }
    }
`

export const FormInfoWrapper = styled.div`
    padding-top : 40px;
    display : flex;
    flex-direction : column;
    align-items : center;

    @media ${breakPoints.mobile} {
        padding-top : 30px;
        //
        input {
            height : 40px;
            margin : 0px;
            font-size : 14px;
        }
    }
`