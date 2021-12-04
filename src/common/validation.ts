import * as yup from 'yup';

// 아이디 검증하기
const checkId = /^[a-z]+[a-z0-9]{5,19}$/g;

export const shema = {
    login : yup.object().shape({
        id : yup
            .string()
            .required(":: 아이디를 입력해주세요.")
            .matches(checkId, ":: 소문자 및 숫자로 6-20 글자만 가능합니다.")
        ,
        password : yup
            .string()
            .required(":: 비밀번호를 입력해주세요.")
            .matches(checkId, ":: 소문자 및 숫자로 6-20 글자만 가능합니다.")
        ,
    }),

    signup : yup.object().shape({
        id : yup
            .string()
            .required(":: 아이디를 입력해주세요.")
            .matches(checkId, ":: 소문자 및 숫자로 6-20 글자만 가능합니다.")
        ,
        nickname : yup
            .string()
            .required(":: 닉네임을 입력해주세요.")
            .min(2, ":: 최소 2글자 이상 입력해주세요.")
            .max(10, ":: 최대 10글자까지만 가능합니다.")
        ,
        password : yup
            .string()
            .required(":: 비밀번호를 입력해주세요.")
            .matches(checkId, ":: 소문자 및 숫자로 6-20 글자만 가능합니다.")
        ,
        confirm : yup
            .string()
            .required(":: 비밀번호 확인을 입력해주세요.")
            .matches(checkId, ":: 소문자 및 숫자로 6-20 글자만 가능합니다.")
    })
}