import { Modal } from "antd";
import "antd/dist/antd.css"

export const antdModals = ( type : string, message : string ) => {
    // type : info, success, error, warning
    return Modal[type]({ content : message })
}