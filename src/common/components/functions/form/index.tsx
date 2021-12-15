import { useEffect, useCallback } from "react";

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
    const { handleSubmit, formState, register, setValue, trigger, watch } = useForm({
        // @ts-ignore
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

    // 데이터 수정하기 (0.3초 디바운싱 적용)
    let _debounce : ReturnType<typeof setTimeout>;
    const _setValue = useCallback(( name : string, content?: string ) => () => {
        if( _debounce ) {
            window.clearTimeout(_debounce)
        }

        _debounce = setTimeout( () => {
            const contents = content || (document.getElementsByName(name)[0] as HTMLInputElement ).value;
                
            setValue(name, contents);
            trigger(name);
        }, 300)
    }, [])

    return(
        <form 
            onSubmit={handleSubmit(onSubmit)}
        >
            <Components
                formState={formState}
                setValue={_setValue}
                register={register}
                props={props}
                watch={watch}
            />
        </form>
    )
}