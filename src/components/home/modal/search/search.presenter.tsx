
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
import SearchEmailPage from "./email";

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

            <InputWrapper type={props.type}>
                {props.type === "email"
                    && <SearchEmailPage 
                            onChange={setValue}
                            error={formState.errors?.email?.message || ""}
                       />
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
                    styles={{ fontSize : "15px", height : "50px", width : "150px",
                            borderRadius : "25px"
                    }}
                    isSubmit={formState.isValid}
                    submitStyles={{ backgroundColor : "rgb(87, 114, 255)", color : "white" }}
                    hoverEvent={true}
                    hoverStyles={{ filter : "drop-shadow(2px 4px 12px black)" }}
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