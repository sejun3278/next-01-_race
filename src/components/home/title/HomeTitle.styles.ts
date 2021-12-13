import styled from "@emotion/styled";
import { breakPoints } from "../../../common/styles/responsive";

export const TitleWrapper = styled.div`
    padding : 200px 0px;
    padding-bottom : 100px;
    display : flex;
    flex-direction : column;
    justify-content : center;
    align-items : center;

    @media ${breakPoints.tablet} {
        padding : 120px 0px;
    }

    @media ${breakPoints.mobile} {
        padding : 50px 0px;
    }
`

export const TitleItem = styled.div`
    
`

export const Title = styled.h1`
    font-size : 52px;
    font-weight : 900;
    margin : 0px;
    word-spacing : 10px;

    @media ${breakPoints.mobile} {
        font-size : 7vw;
    }
`

export const Version = styled.div`
    color : #ababab;
    text-align : right;
    transform : translate(15px, -5px);
`