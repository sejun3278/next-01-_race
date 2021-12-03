import styled from "@emotion/styled";

import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import { MDBInput } from "mdb-react-ui-kit";

import { StylesTypes } from "../../../types";
import { UseFormRegisterReturn } from "react-hook-form";
import { useEffect } from "react";

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
    register
} : IProps) {

    return(
        <InputWrapper>
            <Input label={errorMessages ? errorMessages : placeHolder} 
                   type={type ? type : "text"}
                   maxLength={max}
                   style={styles}
                   isHookForm={isHookForm}
                   name={name}
                   onChange={onChange && onChange(name)}
                   {...register(name)}
                //    errorMessages={errorMessages || ""}
            />
        </InputWrapper>
    )
}

const InputWrapper = styled.div`

`

const Input = styled(MDBInput)`
    width : 300px;
    height : 50px;
    padding-left : 10px;
    font-size : 15px;
    display : flex;
    margin-bottom : 15px;
`