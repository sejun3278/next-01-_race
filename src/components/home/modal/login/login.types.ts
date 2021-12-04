export interface ContainerIProps {
    loginModal : boolean
    toggleModal : () => void
    moveLoginPage : ( data : string ) => () => void
}

export interface LoginUIPageIProps {
    submitLogin : ( data : any ) => void
    toggleModal : () => void
    moveLoginPage : ( data : string ) => () => void
}

export interface LoginUIPageComponentsIProps {
    formState : any
    register : any
    setValue : ( name : string ) => () => void
    props : LoginUIPageIProps
}