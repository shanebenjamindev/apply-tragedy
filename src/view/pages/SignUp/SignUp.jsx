import React, { useEffect, useState } from 'react';
import { Form, Input, Button, Typography, Alert } from 'antd';
import userData from '../../../data/userData.json';
import { useDispatch, useSelector } from 'react-redux';
import { actSignUp } from '../../../redux/action';
import { useNavigate } from 'react-router-dom';
import { GetUser } from '../../../hooks/userHooks';
const { Title } = Typography;

export default function SignUp() {
    const [form] = Form.useForm();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const user = GetUser();

    useEffect(() => {
        if (user) {
            navigate("/");
        }
    }, [user]);

    const onFinish = (newUser) => {
        dispatch(actSignUp(newUser, navigate))
    };

    return (
        <section className='flex h-screen justify-center items-center w-full'>
            <a href="/" className="fixed top-3 left-3 text-blue-500 hover:text-blue-700 transition-colors duration-500">Back to home</a>

            <Form
                form={form}
                name="signUpForm"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                className='text-center rounded md:w-5/12 md:p-5'
            >
                <Title level={2}>Sign Up</Title>
                <Form.Item
                    name="name"
                    rules={[{ required: true, message: 'Please input your email!' }]}
                >
                    <Input placeholder="Your Name" />
                </Form.Item>
                <Form.Item
                    name="email"
                    rules={[{ required: true, message: 'Please input your email!' }]}
                >
                    <Input placeholder="Your Email" />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password placeholder="Password" />
                </Form.Item>
                <Form.Item
                    name="confirmPassword"
                    rules={[{ required: true, message: 'Please input confirm password!' }]}
                >
                    <Input.Password placeholder="Confirm Password" />
                </Form.Item>
                <Form.Item
                    name="phone"
                    rules={[{ required: true, message: 'Please input your phone!' }]}
                >
                    <Input placeholder="Phone" />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Sign Up
                    </Button>
                </Form.Item>
                <div>
                    <a href="/sign-in" className="text-blue-500 hover:text-blue-700 transition-colors duration-500">
                        <p>Already have account?</p>
                        <Button>Go Login</Button></a>
                </div>

            </Form>
        </section>
    );
}
