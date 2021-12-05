import { FormInfoWrapper } from "..";

import Form from "../../../../../common/components/functions/form";
import Input from "../../../../../common/components/functions/input";
import Button from "../../../../../common/components/functions/button";

const inputStyles = {
    marginBottom : "20px"
};

function SignupUIPageComponents({
    setValue,
    formState
}) {

    return(
        <FormInfoWrapper>
            <Input placeHolder="이메일"
                    type="text"
                    name="email"
                    max={20}
                    onChange={() => setValue("email")}
                    styles={{ ...inputStyles }}
                    errorMessages={formState.errors?.email?.message}
                //    errorMessages={formState}
            />

            {/* <Input placeHolder="닉네임"
                    type="text"
                    name="nickname"
                    max={10}
                    onChange={() => setValue("nickname")}
                    styles={{ ...inputStyles }}
                    errorMessages={formState.errors?.nickname?.message}
                //    errorMessages={formState.errors?.nickname.messges}
            /> */}

            <Input placeHolder="비밀번호"
                    type="password"
                    name="password"
                    max={20}
                    onChange={() => setValue("password")}
                    styles={{ ...inputStyles }}
                    errorMessages={formState.errors?.password?.message}
            />

            <Input placeHolder="비밀번호 확인"
                    type="password"
                    name="confirm"
                    max={20}
                    onChange={() => setValue("confirm")}
                    errorMessages={formState.errors?.confirm?.message}
            />

            <Button 
                title="다음으로"
                submit={true}
                styles={{
                    margin : '30px 0px 0px 0px', width : '350px', fontSize : '16px', borderRadius : '10px'
                }}
                isSubmit={formState.isValid}
                hoverStyles={{ filter : "drop-shadow(2px 4px 12px black)" }}
                hoverEvent={true}
                submitStyles={{ backgroundColor : 'rgb(87, 114, 255)', 'color' : 'white !important' }}
            />
        </FormInfoWrapper>
    )
}

export default function SignupUIPage({
    sumbitSignup
}) {
    return(
        <Form 
            onSubmit={sumbitSignup}
            Components={SignupUIPageComponents}
            formDatas={["email", "password", "confirm"]}
            yupName="signup"
        />
    )
}