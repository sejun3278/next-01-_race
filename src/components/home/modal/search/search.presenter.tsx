
import {
    SearchWrapper,
    InputWrapper,
    Notice,
    ButtonWrapper
} from "./search.styles";
import Form from "../../../../common/components/functions/form";
import Input from "../../../../common/components/functions/input";
import Button from "../../../../common/components/functions/button";

import ModalTitle from "../commons/title";

import { UIPageTypes, IProps } from "./search.types";

function SearchUIComponent({
    props,
    setValue,
    formState
} : IProps) {
    console.log(formState)

    return(
        <SearchWrapper>
            <ModalTitle 
                title={`<h2> ${props.title} </h2>`}
            />
            <Notice dangerouslySetInnerHTML={{ __html : props.notice }}/>

            <InputWrapper>
                {props.type === "email"
                    && <>
                            <Input 
                                placeHolder="닉네임"
                                name="nickname"
                                onChange={() => setValue("nickname")}
                                errorMessages={formState.errors?.nickname?.message}
                            />
                       </>
                }

                {props.type === "password"
                    && <>
                            <Input 
                                placeHolder="이메일"
                                name="email"
                            />

                            <Input 
                                placeHolder="이름"
                                name="name"
                            />

                            <Input 
                                placeHolder="전화번호"
                                name="phone"
                            />
                       </>
                }
            </InputWrapper>
            
            <ButtonWrapper>
                <Button 
                    title="조회하기"
                    submit={true}
                />
            </ButtonWrapper>
        </SearchWrapper>
    )
}

export default function SearchUIPage({
    submit,
    props,
    yapName
} : UIPageTypes) {

    return ( 
        <Form 
            Components={SearchUIComponent}
            onSubmit={submit}
            props={props}
            yupName={yapName}
            formDatas={props.type === "email"
                ? ['nickname']
                : ['email', 'name', 'phone']
            }
        /> 
    )
}