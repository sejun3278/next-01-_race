import {
    LoginWrapper,
    LoginCheck,
    B,
    // Form,
    LoginInputsWrapper,
    // LoginInputsItem
} from "./login.styles"

import Form from "../../../../common/components/functions/form";
import Input from "../../../../common/components/functions/input";
import Button from "../../../../common/components/functions/button";

import { antdModals } from "../../../../common/libraries/antd";
import { firebaseApp } from "../../../../../pages/_app";
import {
    collection,
    getFirestore,
    addDoc
} from "@firebase/firestore"
import { useEffect } from "react";

interface IProps {
    formState : any
    register : any
    setValue : ( name : string ) => () => void
}

function LoginUIPageComponents({
    formState,
    setValue,
    register
} : IProps) {

    useEffect( () => {
        async function testFireBase() {
            const test = collection(getFirestore(firebaseApp), "test");
            await addDoc(test, {
                    name : "test"
                })
        }
        testFireBase();

    }, [])

    return(
        <LoginWrapper>
            <LoginCheck>
                <div> 비로그인 상태입니다. </div>
                <div> <B>회원가입</B> 또는 <B>로그인</B>을 해주세요. </div>
            </LoginCheck>

            <LoginInputsWrapper>
                <Input 
                    placeHolder="아이디"
                    max={20}
                    styles={{ marginBottom : "20px" }}
                    // onChange={() => setValue("id")}
                    name="id"
                    register={register}
                    errorMessages={formState.errors?.id?.message}
                />

                <Input 
                    placeHolder="비밀번호"
                    type="password"
                    max={20}
                    // onChange={() => setValue("password")}
                    name="password"
                    register={register}
                    errorMessages={formState.errors?.password?.message}
                />

                <Button 
                    title="로그인"
                    submit={true}
                    styles={{
                        marginTop : '10px', width : '300px', border : "solid 1px #ababab", color : "#ababab",
                        fontSize : '15px', borderRadius : '10px'
                    }}
                    isSubmit={formState.isValid}
                    hoverStyles={{ filter : "drop-shadow(2px 4px 12px black)" }}
                    hoverEvent={true}
                    submitStyles={{ backgroundColor : 'rgb(87, 114, 255)', 'color' : 'white !important' }}
                />
            </LoginInputsWrapper>
        </LoginWrapper>
    )
}

export default function LoginUIPage({
    closeModal
} : any) {
    // 로그인 전송하기
    const submitLogin = ( data ) => {
        console.log(data)

        antdModals("success", "123")
    }

    return(
        <Form
            onSubmit={submitLogin}
            Components={LoginUIPageComponents}
            yupName="login"
            formDatas={["id", "password"]}
        ></Form>
    )
}