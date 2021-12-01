import {
    LoginWrapper,
    LoginCheck,
    B,
    Form,
    LoginInputsWrapper,
    LoginInputsItem
} from "./login.styles"

import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup/dist/yup'
import { shema } from '../../../../common/validation';

import Input from "../../../../common/components/functions/input";
import Button from "../../../../common/components/functions/button";

interface IProps {
    closeModal : () => void
}

export default function LoginUIPage({
    closeModal

} : IProps) {
    const { watch, handleSubmit, formState, getValues, setValue, trigger } = useForm({
        resolver : yupResolver(shema.login)
    });

    // 로그인 전송하기
    const submitLogin = ( data ) => {
        console.log(data)
    }

    // 폼 데이터 저장하기
    const saveFormData = ( name : string ) => () => {
        const contents = (document.getElementsByName(name)[0] as HTMLInputElement ).value;

        setValue(name, contents)
    }

    return(
        <LoginWrapper>
            <LoginCheck>
                <div> 비로그인 상태입니다. </div>
                <div> <B>회원가입</B> 또는 <B>로그인</B>을 해주세요. </div>
            </LoginCheck>

            <Form onSubmit={handleSubmit(submitLogin)}>
                <LoginInputsWrapper>
                    <Input 
                        placeHolder="아이디를 입력해주세요."
                        max={20}
                        styles={{ marginBottom : "20px" }}
                        onChange={() => saveFormData("id")}
                        name="id"
                    />

                    <Input 
                        placeHolder="비밀번호를 입력해주세요."
                        type="password"
                        max={20}
                        // isHookForm={ register("password") }
                    />

                    <Button 
                        title="로그인"
                        submit={true}
                        styles={{
                            marginTop : '10px', width : '300px', border : "solid 1px #ababab", color : "#ababab",
                            fontSize : '15px', borderRadius : '10px'
                        }}
                        isSubmit={formState.isSubmitted}
                    />
                </LoginInputsWrapper>
            </Form>
        </LoginWrapper>
    )
}