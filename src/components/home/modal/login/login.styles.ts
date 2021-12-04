import styled from "@emotion/styled";

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
    padding-top : 50px;
`

export const OtherWrapper = styled.div`
    border-top : solid 2px black;
    display: flex;
    flex-direction : column;

    button {
        border : none;
        background : none;
        font-size : 16px;
        color : #ababab;
    }
`

export const OtherList = styled.div`
    width : 100%;
    display : flex;
    justify-content : space-around;
    padding : 10px 0px;
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