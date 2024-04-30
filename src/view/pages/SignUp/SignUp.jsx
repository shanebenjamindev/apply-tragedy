import React, { useEffect, useState } from 'react';
import { Form, Input, Button, Typography, Alert } from 'antd';
import userData from '../../../data/userData.json';
import { useDispatch, useSelector } from 'react-redux';
import { actSignUp } from '../../../redux/action';
import { Link, useNavigate } from 'react-router-dom';
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
        <section style={{ backgroundColor: "var(--primary-fade-bg)" }} className='flex h-screen justify-center items-center w-full'>
            <Link to={"/"} className='flex gap-2 items-center absolute top-10 rounded-2xl' >
                <img width={"50px"} src='/images/logo.jpg' />
                <h2 className='main-title'>Tragedy</h2>
            </Link>

            <div className='rounded-2xl bg-white md:w-3/12 p-5 w-full'>
                <Form
                    form={form}
                    name="signUpForm"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    className='justify-center'
                >
                    <h1 className='form-title my-5'>Sign Up</h1>

                    <div className='flex justify-between gap-3'>
                        <Form.Item
                            name="firstName"
                            rules={[{ required: true, message: 'Please input your email!' }]}
                        >
                            <Input placeholder="First Name" />
                        </Form.Item>
                        <Form.Item
                            name="lastName"
                            rules={[{ required: true, message: 'Please input your email!' }]}
                        >
                            <Input placeholder="Last Name" />
                        </Form.Item>
                    </div>


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
                    <Form.Item>
                        <Button htmlType="submit" className='w-full bg-slate-700 text-white'>
                            Create an account
                        </Button>
                    </Form.Item>
                    <hr className='p-2'></hr>

                    <div className='flex justify-between items-center'>
                        <span> Already have account?</span>
                        <Link to="/sign-in"><Button>Sign in</Button></Link>
                    </div>
                </Form>
            </div>
        </section >
    );
}
