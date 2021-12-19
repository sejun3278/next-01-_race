// 전화번호 - 처리하기
export const phoneValidate = ( callback: ( name : string, content?: string, onDebounce?: boolean ) => () => {} ) => () => {
    const phoneNumber = (document.getElementsByName("phone")[0] as HTMLInputElement ).value
            .trim()
            .split("");
        (phoneNumber)

        if( phoneNumber.length >= 4 && phoneNumber[3] !== "-" ) 
            phoneNumber.splice( 3, 0, "-" );
        if( phoneNumber.length >= 9 && phoneNumber[8] !== "-" )
            phoneNumber.splice( 8, 0, "-" );

        return callback( "phone", phoneNumber.join(""), false )();
}