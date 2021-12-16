import { useEffect, useCallback, useContext } from "react";
import { HomeContext } from "src/components/home/homeContext";

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
    const { handleSubmit, formState, register, setValue, trigger, watch, getValues } = useForm({
        // @ts-ignore
        resolver : yupResolver(shema[yupName])
    });
    const { saveUserInfo } = useContext( HomeContext );

    // 받아올 폼 데이터 초기값 설정하기
    useEffect( () => {
        if( formDatas ) {
            formDatas.forEach( el => {
                // @ts-ignore
                setValue(el, saveUserInfo[el] || "");
            })
        }
    }, [formDatas])

    // 데이터 수정하기 (0.3초 디바운싱 적용)
    let _debounce : ReturnType<typeof setTimeout>;
    const _setValue = useCallback(( name : string, content?: string, onDebounce?: boolean ) => () => {
        const timer = 300;
        const contents = content || (document.getElementsByName(name)[0] as HTMLInputElement ).value;

        if( onDebounce === false ) {
            setValue(name, contents);
            trigger(name);

            return;
        }

        if( _debounce ) {
            window.clearTimeout(_debounce)
        }

        _debounce = setTimeout( () => {
            setValue(name, contents);
            trigger(name);
        }, timer)
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
                getValues={getValues}
            />
        </form>
    )
}