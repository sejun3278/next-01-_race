import styled from "@emotion/styled"
import { useEffect, useContext } from "react"
import { breakPoints } from "src/common/styles/responsive"

import { HomeContext } from "src/components/home/homeContext"

export default function ModalTitle({
    title
} : { title : string }) {
    const { moveLoginPage } = useContext(HomeContext);

    useEffect( () => {
        if( document.querySelector('#moveSignup') ) {
            document.querySelector('#moveSignup')?.addEventListener("click", function() {
                moveLoginPage("/signup/part1")()
            })
        }
    }, [])

    return(
        <TitleWrapper dangerouslySetInnerHTML={{ __html : title }} />
    )
}

const TitleWrapper = styled.div`
    display : flex;
    flex-direction : column;
    align-items : center;
    padding : 35px 0px;
    border-bottom : solid 1px black;
    text-align : center;
    
    h2 {
        font-size : 30px;
        font-weight : 500;
        line-height : 45px;
    }

    h3 {
        font-size : 25px;
        line-height : 40px;
    }

    span {
        font-weight : 700;
        color : rgb(87, 114, 255);
        cursor : pointer;
        border-bottom : solid 1px rgb(87, 114, 255);
        
    }

    @media ${breakPoints.mobile} {
        padding : 10px 0px;
        padding-bottom : 25px;

        h2 {
            font-size : 20px;
        }

        h3 {
            font-size : 16px;
            line-height : 25px;
        }
    }
`