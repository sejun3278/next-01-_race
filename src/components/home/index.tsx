import Template from "../../common/components/template"
import HomeContextPage from "./homeContext";

import { useContext } from "react";
import { GlobalContext } from "src/common/components/GlobalContext/globalContext";

export default function MainHome() {
    const { userInfo } = useContext(GlobalContext);
    
    return(
        <Template>
            {!userInfo.email &&
                <HomeContextPage />
            }
        </Template>
    )
}