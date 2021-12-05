import styled from "@emotion/styled"
import { MutableRefObject, useRef } from "react";
import { StylesTypes } from "../../../types";

interface IProps {
    title : string
    styles?: StylesTypes
    hoverStyles?: StylesTypes
    hoverEvent?: boolean
    clickEvent?: () => void,
    submit?: boolean
    isSubmit?: boolean
    submitStyles?: StylesTypes
    icon?: string
    reverse?: boolean
    iconStyles?: StylesTypes
    wrapperStyle?: StylesTypes
}

export default function ButtonComponents({
    title,
    styles,
    hoverStyles,
    hoverEvent,
    clickEvent,
    submit,
    isSubmit,
    submitStyles,
    icon,
    iconStyles,
    reverse,
    wrapperStyle
} : IProps) {
    const buttonRef = useRef() as MutableRefObject<HTMLButtonElement>;
    let isSubmited = isSubmit !== undefined ? isSubmit : true;

    return(
        <ButtonWrapper style={wrapperStyle}>   
            {(icon && reverse) && 
                <Icon alt='버튼 아이콘' src={icon} 
                      style={iconStyles}
                />
            }     
            <Button 
                ref={buttonRef}
                style={styles}
                hoverStyles={isSubmited ? hoverStyles : {}}
                hoverEvent={isSubmited ? hoverEvent : false}
                onClick={clickEvent ? clickEvent : undefined}
                type={submit ? 'submit' : 'button' }
                isSubmit={isSubmited}
                // disabled={!isSubmited}
                submitStyles={submitStyles}
            >
                {title}
            </Button>
            {(icon && !reverse) && 
                <Icon alt='버튼 아이콘' src={icon} 
                      style={iconStyles}
                />
            }
        </ButtonWrapper>
    )
}

interface StylesProps {
    hoverStyles?: StylesTypes
    hoverEvent?: boolean
    isSubmit?: boolean
    submitStyles?: StylesTypes
    reverse?: boolean
}

const ButtonWrapper = styled.div`
    display : flex;
    ${ (props : StylesProps) => props.reverse && {
        flexDirection : "row-reverse"
    }}
`

const Button = styled.button`
    display : flex;
    align-items : center;
    justify-content : center;
    padding : 7px 15px;
    margin-bottom : 40px;
    font-size : 20px;
    cursor: pointer;
    background-color : "white";
    border-radius : 20px;
    font-weight : 500;
    cursor: ${ (props) => props.isSubmit ? "pointer" : "no-drop" };
    border : solid 1px #ababab;
    color : #ababab;

    ${ (props) => props.hoverEvent && {
        transition : 'all 0.3s'
    }};

    ${ (props) => (props.isSubmit === true && props.submitStyles) && {
        backgroundColor : props.submitStyles.backgroundColor,
        color : props.submitStyles.color
    }}

    :hover {
        ${ (props : StylesProps) => props.hoverStyles && {
            filter : props.hoverStyles.filter
        }}

        ${ (props) => props.hoverEvent && {
            transition : 'all 0.3s'
        }};
    }
`

const Icon = styled.img`

`