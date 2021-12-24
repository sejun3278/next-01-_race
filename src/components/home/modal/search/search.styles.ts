import styled from "@emotion/styled";

interface IProps {
    type ?: string
    complate ?: boolean
}

export const SearchWrapper = styled.div`
    display :flex;
    flex-direction : column;
`

export const InputWrapper = styled.div`
    display :flex;
    flex-direction : column;
    /* padding-top : 50px; */
    padding-top : ${ (props : IProps) => props.type === 'email' && "50px" };
    padding-top : ${ (props) => props.complate === true && "0px" };
    align-items : center;
    min-height : ${ (props : IProps) => props.type === 'email' ? "300px" : "280px" };
    
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
    min-height : 20px;
`

export const ButtonWrapper = styled.div`
    display : flex;
    justify-content : center;
`