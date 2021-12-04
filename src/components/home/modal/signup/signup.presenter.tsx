import { 
    SignupWrapper,
    TitleWrapper,
    Title,
    FormInfoWrapper
} from "./signup.styles";

import BackLogin from "../../backLogin";
import Form from "../../../../common/components/functions/form";
import Input from "../../../../common/components/functions/input";
import Button from "../../../../common/components/functions/button";

const inputStyles = {
    marginBottom : "20px"
};

function SignupUIPageComponents({
    setValue,
    formState
}) {
    return(
        <SignupWrapper>
            <BackLogin />
            <TitleWrapper>
                <Title> 계정 등록 </Title>
            </TitleWrapper>
            <FormInfoWrapper>
                <Input placeHolder="아이디"
                       type="text"
                       name="id"
                       max={20}
                       onChange={() => setValue("id")}
                       styles={{ ...inputStyles }}
                        errorMessages={formState.errors?.id?.message}
                    //    errorMessages={formState}
                />

                <Input placeHolder="닉네임"
                       type="text"
                       name="nickname"
                       max={10}
                       onChange={() => setValue("nickname")}
                       styles={{ ...inputStyles }}
                       errorMessages={formState.errors?.nickname?.message}
                    //    errorMessages={formState.errors?.nickname.messges}
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
                    title="계정 등록 신청"
                    submit={true}
                    styles={{
                        margin : '30px 0px 0px 0px', width : '350px', border : "solid 1px #ababab", color : "#ababab",
                        fontSize : '16px', borderRadius : '10px'
                    }}
                    isSubmit={formState.isValid}
                    hoverStyles={{ filter : "drop-shadow(2px 4px 12px black)" }}
                    hoverEvent={true}
                    submitStyles={{ backgroundColor : 'rgb(87, 114, 255)', 'color' : 'white !important' }}
                />
            </FormInfoWrapper>
        </SignupWrapper>
    )
}

export default function SignupUIPage({
    sumbitSignup
}) {
    return(
        <Form 
            onSubmit={sumbitSignup}
            Components={SignupUIPageComponents}
            formDatas={["id", "nickname", "password", "confirm"]}
            yupName="signup"
        />
    )
}