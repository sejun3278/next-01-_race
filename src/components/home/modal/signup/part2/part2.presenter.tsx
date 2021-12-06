import { FormInfoWrapper } from "..";
import { 
    OptionalWrapper,
    Remarks
} from "./part2.styles";

import Form from "../../../../../common/components/functions/form";
import Input from "../../../../../common/components/functions/input";
import Button from "../../../../../common/components/functions/button";

import { phoneValidate } from "../../../../../common/libraries/validation";

function SignupPart2UIComponentsPage({
    setValue,
    formState,
    watch
}) {
    return(
        <FormInfoWrapper>
            <Input 
                placeHolder="닉네임"
                name="nickname"
                type="text"
                max={10}
                onChange={() => setValue("nickname")}
                errorMessages={formState.errors?.nickname?.message}
            />

            <OptionalWrapper>
                <Remarks>
                    <div> <u> 이메일 / 비밀번호 찾기 </u>에 참고되는 내용입니다. </div>
                    <div> 필수항목은 아니므로, 계속 진행하셔도 됩니다. </div>
                </Remarks>

                <Input 
                    placeHolder="이름"
                    name="name"
                    type="text"
                    max={10}
                    onChange={() => setValue("name")}
                />

                <Input 
                    placeHolder="전화번호"
                    name="phone"
                    type="text"
                    max={13}
                    value={watch("phone")}
                    onChange={() => phoneValidate(setValue)}
                />
            </OptionalWrapper>

            <Button 
                title="계정 등록 신청"
                submit={true}
                styles={{
                    width : '350px', fontSize : '16px', borderRadius : '10px', marginTop : '10px'
                }}
                isSubmit={formState.isValid}
                hoverStyles={{ filter : "drop-shadow(2px 4px 12px black)" }}
                hoverEvent={true}
                submitStyles={{ backgroundColor : 'rgb(87, 114, 255)', 'color' : 'white !important' }}
            />
        </FormInfoWrapper>
    )
}

export default function SignupPart2UIPage({
    sumbit
}) {
    return(
        <Form
            onSubmit={sumbit}
            Components={SignupPart2UIComponentsPage}
            formDatas={['nickname']}
            yupName="userInfo"
        />
    )
}