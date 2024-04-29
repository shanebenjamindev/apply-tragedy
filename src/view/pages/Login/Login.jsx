import React, { useEffect, useState } from 'react';
import { Form, Input, Button, Typography, Alert } from 'antd';
import userData from '../../../data/userData.json';
import { useDispatch } from 'react-redux';
import { actSignIn } from '../../../redux/action';
import { Link, useNavigate } from 'react-router-dom';
import { GetUser } from '../../../hooks/userHooks';

const { Title } = Typography;

export default function Login() {
    const [form] = Form.useForm();
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const user = GetUser()

    useEffect(() => {
        if (user) {
            navigate("/");
        }
    }, [user]);


    const onFinish = (values) => {
        dispatch(actSignIn(values, navigate))
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <section className='theme flex h-screen justify-center items-center w-full'>
            <a href="/" className="fixed top-3 left-3 text-blue-500 hover:text-blue-700 transition-colors duration-500">Back to home</a>

            <div className='p-4 rounded w-3/12'>
                <Form
                    form={form}
                    name="loginForm"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
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
