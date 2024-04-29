import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { GetUser, LogoutLocalUser } from '../../hooks/userHooks';
import { Button } from 'antd';

export default function Header() {
    const user = GetUser()
    const userData = user?.userData
    const navigate = useNavigate();

    const handleLogout = () => {
        LogoutLocalUser(navigate);
    }
    return (
        <div className='fixed w-full bg-gray-800 p-3 text-white'>
            <nav className='flex justify-between items-center'>
                <Link to="/">Tragedy</Link>
                <ul className='flex gap-3'>
                    {userData ?

                        <li><span className='mr-2'>Welcome, {userData?.name}</span><Button danger type='primary' onClick={handleLogout}>Logout</Button></li>
                        :

                        <li>
                            <Link to="/sign-in">Login </Link>
                            or
                            <Link to="/sign-up"> Register</Link>
                        </li>
                    }

                </ul>
            </nav>
        </div>
    )

}