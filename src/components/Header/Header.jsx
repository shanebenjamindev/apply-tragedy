import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { GetUser, LogoutLocalUser } from '../../hooks/userHooks';
import { Button, Image } from 'antd';
import './style.css'
export default function Header() {
    const user = GetUser()
    const userData = user?.userData
    const navigate = useNavigate();

    const handleLogout = () => {
        LogoutLocalUser(navigate);
    }
    return (
        <header className='z-50 fixed w-full text-white'>
            <nav className='flex justify-between items-center'>
                <Link to="/" className='logo nav-link'>Tragedy</Link>
                <ul className='flex gap-3'>
                    {userData ?
                        <li><span className='mr-2'>Welcome, {userData?.name}</span><Button danger type='primary' onClick={handleLogout}>Logout</Button></li>
                        :
                        <li>
                            <Link className='nav-link' to="/sign-in"><button className='header-button'><span>Login or Register</span></button></Link>
                        </li>
                    }

                </ul>
            </nav>
        </header >
    )

}