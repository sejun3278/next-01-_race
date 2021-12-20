import { memo } from "react";

import styled from "@emotion/styled"
import { breakPoints } from "src/common/styles/responsive";

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
    responsiveStyles ?: StylesTypes
    responsiveIconStyles?: StylesTypes
}

function ButtonComponents({
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
    responsiveStyles,
    responsiveIconStyles
} : IProps) {
    const buttonRef = useRef() as MutableRefObject<HTMLButtonElement>;
    let isSubmited = isSubmit !== undefined ? isSubmit : true;

    return(
        <Button 
            ref={buttonRef}
            style={styles}
            hoverStyles={isSubmited ? hoverStyles : {}}
            hoverEvent={isSubmited ? hoverEvent : false}
            type={submit ? 'submit' : 'button' }
            isSubmit={isSubmited}
            // disabled={!isSubmited}
            submitStyles={submitStyles}
            onClick={clickEvent ? clickEvent : undefined}
            reverse={reverse}
            responsiveStyles={responsiveStyles}
        >
            <div> {title} </div>
            { icon &&
                <Icon 
                    alt="아이콘 이미지"
                    src={icon}
                    style={iconStyles}
                    responsiveIconStyles={responsiveIconStyles}
                />
            }
        </Button>
    )
}

export default memo(ButtonComponents)

interface StylesProps {
    hoverStyles?: StylesTypes
    hoverEvent?: boolean
    isSubmit?: boolean
    submitStyles?: StylesTypes
    reverse?: boolean
    responsiveStyles?: StylesTypes
    responsiveIconStyles?: StylesTypes
}

const Button = styled.button`
    display : flex;
    align-items : center;
    justify-content : center;
    ${ (props) => props.reverse && {
        'flexDirection' : 'row-reverse'
    }};

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
            filter : props.hoverStyles.filter && props.hoverStyles.filter,
            backgroundColor : props.hoverStyles.backgroundColor,
            color : props.hoverStyles.color
        }}

        ${ (props) => props.hoverEvent && {
            transition : 'all 0.3s'
        }};
    }

    @media ${breakPoints.mobile} {
        ${ (props) => props.responsiveStyles && {
            height : `${props.responsiveStyles.height} !important`,
            width : `${props.responsiveStyles.width} !important`,
            fontSize : `${props.responsiveStyles.fontSize} !important`,
            marginBottom : `${props.responsiveStyles.marginBottom} !important`,
            margin : `${props.responsiveStyles.margin} !important`,
        }}
    }
`

const Icon = styled.img`
    @media ${breakPoints.mobile} {
        ${ (props : StylesProps) => props.responsiveIconStyles && {
            height : `${props.responsiveIconStyles.height} !important`,
            width : `${props.responsiveIconStyles.width} !important`,
        }}
    }
`