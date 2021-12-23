export interface PropsTypes {
    type : string
    title : string
    notice : string
    complate : boolean
    result : string
}

export interface IProps {
    props : PropsTypes
    setValue : any
    formState : any
}

export interface UIPageTypes {
    submit: ( data : {
        nickname?: string
    }) => void
    props : PropsTypes
    yapName : string
}