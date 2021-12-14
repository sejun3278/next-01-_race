import styled from "@emotion/styled";
import { Spin } from "antd";

import { MutableRefObject, useEffect, useRef } from "react";

export default function LoadingPage({
    loading,
} : { loading : string }) {
    const ref = useRef() as MutableRefObject<HTMLDivElement>;
    useEffect( () => {
        if( loading ) {
            ref.current.classList.add("show");

        } else {
            ref.current.classList.remove("show");
        }
    }, [ loading ])

    return(
        <LoadingWrapper>
            <LoadingContents ref={ref}>
                <Spin tip={"...로딩 중"} />
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
    z-index : 10000;
    background-color : rgba(0, 0, 0, 0.5);
    justify-content : center;

    .show {
        opacity : 1.4;
    }
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
    transition : all 0.6s;
    opacity : 0;

    div {
        margin-top : 20px;
        text-align : center;
    }
`