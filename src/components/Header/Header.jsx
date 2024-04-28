import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { GetUser, LogoutLocalUser } from '../../hooks/userHooks';

export default function Header() {
    const user = GetUser()
    const userData = user?.userData
    const navigate = useNavigate();

    const handleLogout = () => {
        LogoutLocalUser(navigate);
    }
    return (
        <div className='w-full bg-gray-800 p-5 text-white'>
            <nav className='flex justify-between'>
                <div>Application Tragedy</div>
                <ul className='flex gap-3'>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/apply">Jobs</Link>
                    </li>

                    {userData ?

                        <li>Hello, {userData?.name} <button onClick={handleLogout}>Logout</button></li>
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