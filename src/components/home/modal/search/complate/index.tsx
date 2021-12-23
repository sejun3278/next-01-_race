import styled from "@emotion/styled";

interface IProps {
    type : string
    result : string
}

export default function SearchComplateResultPage({
    type,
    result
} : IProps) {
    return(
        <ComplateWrapper>
            {type === "email"
                ? <EmailResult>
                    <h2> 아래의 이메일이 조회되었습니다. </h2>
                    <input type="text" readOnly value={result} /> 
                  </EmailResult>

                : null
            }
        </ComplateWrapper>
    )
}

const ComplateWrapper = styled.div`
    padding : 30px 0px;
`

const EmailResult = styled.div`
    h2 {
        font-size : 25px;
        color : black;
        text-shadow : 1px 1px 1px #FFE100;
    }

    input {
        margin-top : 15px;
        padding : 10px;
        font-size : 18px;
        border : solid 1px #ababab;
        cursor : default;
    }
`