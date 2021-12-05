import * as yup from 'yup';

// 아이디 검증하기
const checkId = /^[a-z]+[a-z0-9]{5,19}$/g;
// 이메일 체크하기
const checkEmail = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;;

export const shema = {
    login : yup.object().shape({
        email : yup
            .string()
            .required(":: 이메일을 입력해주세요.")
            .matches(checkEmail, ":: 올바른 이메일 형태를 입력해주세요.")
        ,
        password : yup
            .string()
            .required(":: 비밀번호를 입력해주세요.")
            .matches(checkId, ":: 소문자 및 숫자로 6-20 글자만 가능합니다.")
        ,
    }),

    signup : yup.object().shape({
        email : yup
            .string()
            .required(":: 이메일을 입력해주세요.")
            .matches(checkEmail, ":: 올바른 이메일 형태를 입력해주세요.")
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
    }),

    userInfo : yup.object().shape({
        nickname : yup
            .string()
            .required(":: 닉네임을 입력해주세요.")
            .min(2, ":: 최소 2글자 이상 입력해주세요.")
    })
}