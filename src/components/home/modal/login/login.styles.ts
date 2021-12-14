import styled from "@emotion/styled";
import { breakPoints } from "src/common/styles/responsive";

export const LoginWrapper = styled.div`
`

export const LoginCheck = styled.div`
    border-bottom : solid 1px black;
    display : flex;
    flex-direction : column;
    line-height : 35px;
    justify-content : center;
    text-align : center;
    font-size : 22px;
    padding : 30px 0px;
    padding-bottom : 40px;

    @media ${breakPoints.mobile} {
        font-size : 16px;
        line-height : 26px;
        padding : 15px 0px;
        padding-bottom : 25px;
    }
`

export const ContentsWrapper = styled.div`
    display : flex;
    flex-direction : column;

    @media ${breakPoints.mobile} {
        flex-direction : row;
    }
`

export const B = styled.b`
   color : rgb(87, 114, 255);
   cursor: pointer;

    :hover {
        border-bottom : solid 2px rgb(87, 114, 255);
    }
`

export const LoginInputsWrapper = styled.div`
    display : flex;
    flex-direction : column;
    align-items : center;
    padding : 50px 0px;

    @media ${breakPoints.mobile} {
        padding : 30px 0px;
        min-width : 50%;
    }

    input {
        @media ${breakPoints.mobile} {
            width : 210px;
            height : 40px;
            margin-bottom : 10px;
        }
    }
`

export const OtherWrapper = styled.div`
    border-top : solid 2px black;
    display: flex;
    flex-direction : column;
    padding-top : 15px;

    @media ${breakPoints.mobile} {
        border-top : none;
        
    }

    button {
        border : none;
        background : none;
        font-size : 16px;
        color : #ababab;

        @media ${breakPoints.mobile} {
            font-size : 13px;
        }
    }
`

export const OtherList = styled.div`
    width : 100%;
    display : flex;
    justify-content : space-around;
    padding : 10px 0px;

    @media ${breakPoints.mobile} {
        flex-direction : column;
        line-height : 50px;
        padding-bottom : 30px;
    }
`

export const Other = styled.button`
    cursor: pointer;

    :hover {
        color : black;
    }
`

export const NoticeSignup = styled.button`
    color : black !important;
    cursor : default !important;
`