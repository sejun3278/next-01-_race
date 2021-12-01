import styled from "@emotion/styled";

import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import { MDBInput } from "mdb-react-ui-kit";

import { StylesTypes } from "../../../types";
import { UseFormRegisterReturn } from "react-hook-form";

interface IProps {
    placeHolder?: string
    type?: string
    max?: number
    styles?: StylesTypes
    isHookForm?: UseFormRegisterReturn
    name?: string
    onChange?: ( name : string ) => () => void
}

export default function InputComponents({
    placeHolder,
    type,
    max,
    styles,
    isHookForm,
    onChange,
    name
} : IProps) {
    console.log(onChange)

    return(
        <InputWrapper>
            <Input label={placeHolder} 
                   type={type ? type : "text"}
                   maxLength={max}
                   style={styles}
                   isHookForm={isHookForm}
                   name={name}
                   onChange={onChange && onChange(name)}
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