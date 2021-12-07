import { ContextTypes } from "../../homeContext"
import styled from "@emotion/styled";

import BackLogin from "../../backLogin";
import SignupContainerPage from "./part1/part1.container"
import SignupPart2ContainerPage from "./part2/part2.container";

import { useEffect, useContext } from "react";
import { HomeContext } from "../../homeContext";

export default function SignupPage({
    loginPage,
    moveLoginPage,
    _saveUserInfo
} : ContextTypes) {
    const { saveUserInfo } = useContext(HomeContext);

    useEffect( () => {
        console.log(saveUserInfo)

        if( saveUserInfo.email !== "" ) {
            if( saveUserInfo.nickname === "" ) {
                console.log(123)
                moveLoginPage("signup/part2")();
            }
        }
    }, [saveUserInfo])

    return(
        <>
            <BackLogin />
            <TitleWrapper>
                <h2> 계정 등록 </h2>
            </TitleWrapper>
            {loginPage.includes("/part1") &&
                <SignupContainerPage 
                    moveLoginPage={moveLoginPage}
                    _saveUserInfo={_saveUserInfo}
                />
            }

            {loginPage.includes("/part2") && 
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
`

export const FormInfoWrapper = styled.div`
    padding-top : 50px;
    display : flex;
    flex-direction : column;
    align-items : center;
`