import { GoogleCircleFilled } from '@ant-design/icons';
import { GoogleLogin, useGoogleLogin } from '@react-oauth/google';
import { Button } from 'antd';

export default function GoogleLoginButton() {
    const login = useGoogleLogin({
        onSuccess: tokenResponse => console.log(tokenResponse),
    });

    return (
        <button className='primary-btn' onClick={() => login()}>
            <GoogleCircleFilled />  Sign in with Google
        </button>
    )
}
