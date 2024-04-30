import React, { useEffect } from 'react';
import { Form, Input, Button, Typography, Alert } from 'antd';
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
    };

    return (
        <section className='theme flex h-screen justify-center items-center w-full'>
            <a href="/" className="fixed top-3 left-3 text-blue-500 hover:text-blue-700 transition-colors duration-500">Back to home</a>

            <div className='w-full rounded md:w-3/12'>
                <Form
                    form={form}
                    name="loginForm"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    className='text-center rounded'
                >
                    <h1 className='main-title my-5 text-white' >Login</h1>
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
                        <Button type="primary" htmlType="submit" className='w-full'>
                            Login
                        </Button>
                    </Form.Item>
                    <div className=' text-blue-500 hover:text-blue-700'>
                        <Link to="/sign-up">Sign up</Link>
                    </div>
                </Form>
            </div>
        </section>
    );
}
