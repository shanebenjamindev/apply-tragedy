import { GoogleLogin } from '@react-oauth/google';
import React from 'react';

export default function Logout() {
    const onSuccess = (res) => {
        console.log(res.profileObj);
    }
    const onError = (res) => {
        console.log(res);
    }

    return (
        <GoogleLogin
            buttonText={"Logout"}
            clientId={"242310560320-9tspldsb0sp5eappa0kpbtgg1dssict7.apps.googleusercontent.com"}
            onSuccess={onSuccess}
            onError={onError}
            cookiePolice={"single_host_origin"}
            isSignedin={true}
        />

    )

}