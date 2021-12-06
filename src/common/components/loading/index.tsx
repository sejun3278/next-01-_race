import styled from "@emotion/styled";
import { Spin, Alert } from "antd";

export default function LoadingPage({
    loading
}) {
    return(
        <LoadingWrapper>
            <LoadingContents>
                <Spin tip="Loading..." />
                <div dangerouslySetInnerHTML={{ __html : loading }}/>
            </LoadingContents>
        </LoadingWrapper>
    )
}

const LoadingWrapper = styled.div`
    /* filter : contrast(0.5); */
    height: 100%;
    width : 100%;
    position : absolute;
    display : flex;
    flex-direction: column;
    z-index : 1000;
    background-color : rgba(0, 0, 0, 0.5);
    justify-content : center;
    transform : opacity 0.5s;
`

const LoadingContents = styled.div`
    background-color : white;
    padding : 20px 0px;
    padding-bottom : 50px;
    /* text-align : center; */
    font-size : 25px;
    font-weight : 700;
    display : flex;
    flex-direction : column;
    align-items :center;

    div {
        margin-top : 20px;
        text-align : center;
    }
`