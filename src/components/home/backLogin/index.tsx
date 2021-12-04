import { useContext } from "react";
import { HomeContext } from "../homeContext";

import ButtonComponents from "../../../common/components/functions/button";

export default function BackLoginComponents() {
    const { moveLoginPage } = useContext(HomeContext)

    const backLoginPage = () => {
        return moveLoginPage("login")();
    }

    return(
        <>
            <ButtonComponents 
                title="Login"
                styles={{ border : "none", backgroundColor : "white", fontSize : "18px" }}
                reverse={true}
                icon={`/images/commons/arrow/arrow_left_black.png`}
                iconStyles={{ width : '12px', height : '12px' }}
                wrapperStyle={{ height : '40px' }}
                clickEvent={backLoginPage}
            />
        </>
    )
}