import {
    LoginWrapper,
    LoginCheck,
    B,
    LoginInputsWrapper,
    OtherWrapper,
    OtherList,
    Other,
    NoticeSignup,
    ContentsWrapper
} from "./login.styles"

import Form from "../../../../common/components/functions/form";
import Input from "../../../../common/components/functions/input";
import Button from "../../../../common/components/functions/button";
import GoogleLoginButton from "../../../../common/components/functions/googleLogin";

import { LoginUIPageComponentsIProps } from "./login.types";
import { useContext } from "react";
import { HomeContext } from "../../homeContext"

function LoginUIPageComponents({
    formState,
    setValue
} : LoginUIPageComponentsIProps) {
    const { moveLoginPage } = useContext(HomeContext)

    return(
        <LoginWrapper>
            <LoginCheck>
                <div> 비로그인 상태입니다. </div>
                <div> <B onClick={moveLoginPage("signup/part1")}>계정 등록</B> 또는 <B>로그인</B>이 필요합니다. </div>
            </LoginCheck>

            <ContentsWrapper>
                <LoginInputsWrapper>
                    <Input 
                        placeHolder="이메일"
                        max={30}
                        styles={{ marginBottom : "20px" }}
                        onChange={() => setValue("email")}
                        name="email"
                        errorMessages={formState.errors?.email?.message}
                    />

                    <Input 
                        placeHolder="비밀번호"
                        type="password"
                        max={20}
                        onChange={() => setValue("password")}
                        name="password"
                        errorMessages={formState.errors?.password?.message}
                    />

                    <Button 
                        title="로그인"
                        submit={true}
                        styles={{
                            marginTop : '10px', width : '350px', fontSize : '15px', borderRadius : '10px',
                            marginBottom : "20px"
                        }}
                        isSubmit={formState.isValid}
                        hoverStyles={{ filter : "drop-shadow(2px 4px 12px black)" }}
                        hoverEvent={true}
                        submitStyles={{ backgroundColor : 'rgb(87, 114, 255)', 'color' : 'white !important' }}
                        responsiveStyles={{ width : "200px", fontSize : "13px"  }}
                    />

                    <GoogleLoginButton />
                </LoginInputsWrapper>

                <OtherWrapper>
                    <OtherList>
                        <Other type="button" onClick={moveLoginPage("signup/part1")}> 계정 등록 </Other>
                        <Other type="button"> 이메일 찾기 </Other>
                        <Other type="button"> 비밀번호 찾기 </Other>
                    </OtherList>
                    <NoticeSignup type="button"> 아직 회원이 아니시라면, <B onClick={moveLoginPage("signup/part1")}>계정 등록</B>을 통해 새로운 계정을 만들어보세요.</NoticeSignup>
                </OtherWrapper>
            </ContentsWrapper>
        </LoginWrapper>
    )
}

export default function LoginUIPage({
    submitLogin
} : { submitLogin : ( data : any ) => void }) {
    return(
        <Form
            onSubmit={submitLogin}
            Components={LoginUIPageComponents}
            yupName="login"
            formDatas={["email", "password"]}
        ></Form>
    )
}