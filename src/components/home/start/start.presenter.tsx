import {
    StartWrapper
} from "./start.styles";
import Button from "../../../common/components/functions/button";
import { StylesTypes } from "../../../common/types";

interface IProps {
    openModal : () => void
}

export default function HomeStartUIPage({
    openModal
} : IProps) {
    const commonStyles : StylesTypes = {
        width : '350px',
        height : '62px',
        color : 'black'
    }

    return(
        <StartWrapper>
            <Button 
                title="Game Start"
                styles={commonStyles}
                hoverStyles={{ filter : "drop-shadow(2px 4px 12px black)" }}
                hoverEvent={true}
                clickEvent={openModal}
                responsiveStyles={{
                    height : "55px", width : "210px", fontSize : "17px",
                    marginBottom : "20px"
                }}
            />

            <Button 
                title="How to play game?"
                styles={commonStyles}
                hoverStyles={{ filter : "drop-shadow(2px 4px 12px black)" }}
                hoverEvent={true}
                responsiveStyles={{
                    height : "55px", width : "210px", fontSize : "17px"
                }}
            />
        </StartWrapper>
    )
}