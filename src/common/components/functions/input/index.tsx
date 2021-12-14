import styled from "@emotion/styled";

import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import { MDBInput } from "mdb-react-ui-kit";

import { StylesTypes } from "../../../types";
import { UseFormRegisterReturn } from "react-hook-form";
import { breakPoints } from "src/common/styles/responsive";

interface IProps {
    placeHolder?: string
    type?: string
    max?: number
    styles?: StylesTypes
    isHookForm?: UseFormRegisterReturn
    name?: string
    onChange?: ( name : string ) => () => void
    errorMessages?: string
    register?: any
    value?: string
    responsiveStyles ?:StylesTypes
}

export default function InputComponents({
    placeHolder,
    type,
    max,
    styles,
    isHookForm,
    onChange,
    name,
    errorMessages,
    register,
    value,
    responsiveStyles
} : IProps) {
    const _register = register || function a() {}

    return(
        <InputWrapper>
            <Input label={errorMessages ? errorMessages : placeHolder} 
                   type={type ? type : "text"}
                   maxLength={max}
                   style={styles}
                   isHookForm={isHookForm}
                   name={name}
                   onChange={onChange && onChange(name || "")}
                   {..._register(name)}
                   value={value}
                   autocomplete={type === "password" && "on" }
                   responsiveStyles={responsiveStyles}
                //    errorMessages={errorMessages || ""}
            />
        </InputWrapper>
    )
}

const InputWrapper = styled.div`

`

const Input = styled(MDBInput)`
    width : 350px;
    height : 50px;
    padding-left : 10px;
    font-size : 15px;
    display : flex;
    margin-bottom : 15px;

    @media ${breakPoints.mobile} {
        ${ (props) => props.responsiveStyles && {
            width : `${props.responsiveStyles.width} !important`,
            height : `${props.responsiveStyles.height} !important`
        }}
    }
`