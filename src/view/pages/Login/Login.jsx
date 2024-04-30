import React, { useEffect } from 'react';
import { Form, Input, Button, Typography, Alert, Image } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { actSignIn } from '../../../redux/action';
import { Link, useNavigate } from 'react-router-dom';
import Loading from '../../../components/Loading';
import { useMessageError, useMessageSuccess } from '../../../components/Message/Message';
import { GetUser } from '../../../hooks/userHooks';

const { Title } = Typography;

export default function Login() {
    const [form] = Form.useForm();
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { loading, data, error } = useSelector(state => state.userReducer)

    useEffect(() => {
        if (!loading && !error && data) {
            const user = GetUser();
            if (user) {
                useMessageSuccess("Login success");
                navigate("/");
            }
        }
    }, [loading, data, error]);

    const onFinish = (values) => {
        dispatch(actSignIn(values))
        console.log(values);
    };

    return (
        <section style={{ backgroundColor: "var(--primary-fade-bg)" }} className='relative flex flex-col h-screen justify-center items-center w-full'>

            <Link to={"/"} className='flex gap-2 items-center absolute top-10 rounded-2xl' >
                <img width={"50px"} src='/images/logo.jpg' />
                <h2 className='main-title'>Tragedy</h2>
            </Link>

            <Form
                form={form}
                name="loginForm"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                className='rounded-2xl bg-white p-5 md:w-4/12 w-full'
                layout='vertical'
            >
                <h2 className='form-title my-5' >Login</h2>
                <Form.Item
                    name="email"
                    rules={[{ required: true, message: 'Please input your email!' }]}
                >

                    <Input placeholder="Email" />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password placeholder="Password" />
                </Form.Item>
                <Form.Item>
                    <Button htmlType="submit" className='w-full bg-slate-700 text-white'>
                        Login
                    </Button>
                </Form.Item>
                <hr className='p-2'></hr>
                <div className='flex justify-between '>
                    <span> Dont have account?</span>
                    <Link to="/sign-up"><Button>Sign up</Button></Link>
                </div>
            </Form>
        </section>
    );
}
