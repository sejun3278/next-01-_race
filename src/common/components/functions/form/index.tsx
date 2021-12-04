import { useEffect } from "react";

import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup/dist/yup'
import { shema } from '../../../../common/validation';

interface IProps {
    // children?: ReactNode
    Components: any
    onSubmit : ( data : any ) => void
    yupName?: string
    formDatas?: Array<string>
    props?: any
}

export default function HookFormPage({ 
    Components,
    onSubmit,
    yupName,
    formDatas,
    props
} : IProps) {
    const { handleSubmit, formState, register, setValue, trigger } = useForm({
        resolver : yupResolver(shema[yupName])
    });

    // 받아올 폼 데이터 초기값 설정하기
    useEffect( () => {
        if( formDatas ) {
            formDatas.forEach( el => {
                setValue(el, "");
            })
        }
    }, [formDatas])

    // 데이터 수정하기
    const _setValue = ( name : string ) => () => {
        const contents = (document.getElementsByName(name)[0] as HTMLInputElement ).value;

        setValue(name, contents);
        trigger(name);
    }

    return(
        <form 
            onSubmit={handleSubmit(onSubmit)}
        >
            <Components
                formState={formState}
                setValue={_setValue}
                register={register}
                props={props}
            />
        </form>
    )
}