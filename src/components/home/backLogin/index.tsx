import { useContext } from "react";
import { HomeContext } from "../homeContext";

import ButtonComponents from "../../../common/components/functions/button";
import { antdModals } from "../../../common/libraries/antd";

export default function BackLoginComponents() {
    const { moveLoginPage, saveUserInfo, resetUserInfo } = useContext(HomeContext)

    const backLoginPage = () => {
        if( saveUserInfo.email ) {
            antdModals("confirm", "", { title : "변경된 내용이 있습니다.", 
                                    contents : "진행된 내용을 포기하고 \n 로그인 페이지로 돌아가시겠습니까?",
                                    closeText : "취소",
                                    okText : "로그인 화면으로 이동",
                                    onOk : () => { 
                                        // 유저 정보 초기화 후, login 화면 이동
                                        resetUserInfo();
                                        return moveLoginPage("login")();
                                    }
            })
            return;
        }
        return moveLoginPage("login")();
    }

    return(
        <>
            <ButtonComponents 
                title="Login"
                styles={{ border : "none", backgroundColor : "white", color : 'black', fontSize : "18px", marginBottom : "0px" }}
                reverse={true}
                icon={`/images/commons/arrow/arrow_left_black.png`}
                iconStyles={{ width : '12px', height : '12px', marginRight : "8px" }}
                wrapperStyle={{ height : '40px' }}
                clickEvent={backLoginPage}
                responsiveStyles={{ fontSize : "14px" }}
                responsiveIconStyles={{ width : "8px", height : "8px" }}
            />
        </>
    )
}