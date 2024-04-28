import React, { useEffect, useState } from 'react';
import { Form, Input, Button, Typography, Alert } from 'antd';
import userData from '../../../data/userData.json';
import { useDispatch } from 'react-redux';
import { actSignIn } from '../../../redux/action';
import { useNavigate } from 'react-router-dom';
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
        <section className='flex h-screen justify-center items-center w-full'>
            <a href="/" className="fixed top-3 left-3 text-blue-500 hover:text-blue-700 transition-colors duration-500">Back to home</a>

            <Form
                form={form}
                name="loginForm"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                className='text-center rounded'
            >
                <Title level={2}>Login</Title>
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
                <div className='mt-2 text-blue-500 hover:text-blue-700'>
                    <a href="/">This function will be available soon, back to home</a>
                </div>
            </Form>
        </section>
    );
}
