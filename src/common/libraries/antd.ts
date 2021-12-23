import { Modal, message } from "antd";
import "antd/dist/antd.css"

export const antdModals = ( type : string, message : string,
        confirmData?: { title : string, contents : string, closeText?: string, okText?: string,
                        onOk?: any },
        disables?: boolean
    ) => {
    // type : info, success, error, warning

    if( type !== 'confirm' )
        // @ts-ignore
        return Modal[type]({ content : message });

    else {
        Modal.confirm({
            title : confirmData?.title,
            content : confirmData?.contents,
            cancelText : confirmData?.closeText,
            okText : confirmData?.okText,
            onOk : confirmData?.onOk
        })
    }
}

export const antdMessage = ( type : string, messageStr : string ) => {
    // @ts-ignore
    message[type](messageStr);
}