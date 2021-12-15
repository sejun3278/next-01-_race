import { FormInfoWrapper } from "..";

import Form from "../../../../../common/components/functions/form";
import Input from "../../../../../common/components/functions/input";
import Button from "../../../../../common/components/functions/button";

const inputStyles = {
    marginBottom : "20px"
};

interface IProps {
    setValue : any
    formState : any
}

function SignupUIPageComponents({
    setValue,
    formState
} : IProps) {

    return(
        <FormInfoWrapper>
            <Input placeHolder="이메일"
                    type="text"
                    name="email"
                    max={30}
                    onChange={() => setValue("email")}
                    styles={{ ...inputStyles }}
                    errorMessages={formState.errors?.email?.message}
            />

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
                responsiveStyles={{ margin : "0px" }}
            />
        </FormInfoWrapper>
    )
}

export default function SignupUIPage({
    sumbitSignup
} : { sumbitSignup : ( data : { email : string, password : string, confirm : string } ) => void }) {
    return(
        <Form 
            onSubmit={sumbitSignup}
            Components={SignupUIPageComponents}
            formDatas={["email", "password", "confirm"]}
            yupName="signup"
        />
    )
}