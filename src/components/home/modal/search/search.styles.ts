import styled from "@emotion/styled";

export const SearchWrapper = styled.div`
    display :flex;
    flex-direction : column;
`

export const InputWrapper = styled.div`
    display :flex;
    flex-direction : column;
    padding-top : 50px;
    /* padding : 50px 0px; */
    align-items : center;
    min-height : 320px;
    
    input {
        width : 350px !important;
        margin-bottom : 20px;
    }
`

export const Notice = styled.div`
    width : 100%;
    text-align : center;
    margin-top : 20px;
    font-size : 15px; 
    font-weight : 500;
`

export const ButtonWrapper = styled.div`
    display : flex;
    justify-content : center;
`