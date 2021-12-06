import { ContextTypes } from "../../homeContext"
import styled from "@emotion/styled";

import BackLogin from "../../backLogin";
import SignupContainerPage from "./part1/part1.container"
import SignupPart2ContainerPage from "./part2/part2.container";

export default function SignupPage({
    loginPage,
    moveLoginPage,
    _saveUserInfo
} : ContextTypes) {
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
                    _saveUserInfo={_saveUserInfo}

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