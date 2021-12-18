
import {
    SearchWrapper,
} from "./search.styles";
import ModalTitle from "../commons/title";

interface IProps {
    loginPage : string
    title : string
}

export default function SearchUIPage({
    loginPage,
    title
} : IProps) {
    return(
        <SearchWrapper>
            <ModalTitle 
                title={`<h2> ${title} </h2>`}
            />
        </SearchWrapper>
    )
}