import styled from "@emotion/styled"
import { StylesTypes } from "../../../types";

interface IProps {
    title : string
    styles?: StylesTypes
    hoverStyles?: StylesTypes
    hoverEvent?: boolean
    clickEvent?: () => void,
    submit?: boolean
    isSubmit?: boolean
}

export default function ButtonComponents({
    title,
    styles,
    hoverStyles,
    hoverEvent,
    clickEvent,
    submit,
    isSubmit
} : IProps) {
    console.log(isSubmit)

    return(
        <ButtonWrapper>        
            <Button 
                style={styles}
                hoverStyles={hoverStyles}
                hoverEvent={hoverEvent}
                onClick={clickEvent ? clickEvent : undefined}
                type={submit ? 'submit' : 'button' }
                disabled={isSubmit && isSubmit || false}
            >
                {title}
            </Button>
        </ButtonWrapper>
    )
}

interface StylesProps {
    hoverStyles?: StylesTypes
    hoverEvent?: boolean
}

const ButtonWrapper = styled.div`
    
`

const Button = styled.button`
    display : flex;
    align-items : center;
    justify-content : center;
    padding : 7px 15px;
    margin-bottom : 40px;
    font-size : 20px;
    cursor: pointer;
    background-color : white;
    border-radius : 20px;
    font-weight : 500;

    ${ (props) => props.hoverEvent && {
        transition : 'all 0.3s'
    }};

    :hover {
        ${ (props : StylesProps) => props.hoverStyles && {
            filter : props.hoverStyles.filter
        }}

        ${ (props) => props.hoverEvent && {
            transition : 'all 0.3s'
        }};
    }
`