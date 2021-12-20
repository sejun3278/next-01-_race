import Input from "../../../../../common/components/functions/input";

interface IProps {
    onChange : ( name : string ) => () => void
    error : string
}

export default function SearchEmailPage({
    onChange,
    error
} : IProps) {
    return(
        <>
            <Input 
                placeHolder="닉네임"
                name="nickname"
                max={10}
                onChange={() => onChange("nickname")}
                errorMessages={error}
            />
        </>
    )
}