import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {

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
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )

}