import {
    TitleWrapper,
    TitleItem,
    Title,
    Version
} from "./HomeTitle.styles";

export default function HomeTitleUIPage() {
    return(
        <TitleWrapper>
            <TitleItem>
                <Title> The Race : DeadLine </Title>
                <Version> 0.1v </Version>
            </TitleItem>
        </TitleWrapper>
    )
}