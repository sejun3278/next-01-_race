export interface IProps {
    Components: any
    onSubmit : ( data : any ) => void
    yupName?: string
    formDatas?: Array<string>
    props?: any
}

export interface ReturnFormTypes {
    formState?: any
    setValue?: ( name : string, content ?: string, onDebounce ?: boolean ) => () => void
    register?: any
    props?: any
    watch?: any
    getValues?: any
}