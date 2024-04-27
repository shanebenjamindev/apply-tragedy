import React, { useState } from 'react';
import userData from '../../../data/userData.json';

export default function Login() {

    const [user, setUser] = useState(
        {
            email: "",
            password: "",
        }
    );
    const [error, setError] = useState('');

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setUser(
            {
                ...user,
                [name]: value,
            }
        )
    };


    const login = () => {

    }

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(userData);

        // if (validUser) {
        //     console.log("success");
        //     // Redirect to a protected route after successful login
        // } else {
        //     setError('Invalid username or password');
        // }
    };

    return (
        <section className='flex h-screen justify-center items-center w-screen'>
            <form className='text-center rounded' onSubmit={handleSubmit}>
                <h2 className='mb-3'>
                    Login
                </h2>
                <div className='flex gap-3'>
                    <div>
                        <div>
                            <label className='mr-5'>Username</label>
                            <input
                                className='border-b-2'
                                placeholder='email to login'
                                type='text'
                                name="email"
                                onChange={handleOnChange}
                            />
                        </div>
                        <div className='mt-2'>
                            <label className='mr-5'>Password</label>
                            <input
                                className='border-b-2'
                                placeholder='password'
                                type='password'
                                name="password"
                                onChange={handleOnChange}
                            />
                        </div>
                        {error && <div className="text-red-500 mt-2">{error}</div>}
                    </div>
                    <div className='flex items-center'>
                        <button
                            type="submit"
                            className='h-full transition duration-500 ease-in-out bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded'
                        >
                            Login
                        </button>
                    </div>
                </div>
                <div className='mt-2 text-blue-500 hover:text-blue-700 transition-colors duration-500'>
                    <a href="/">this function will be available soon, back to home</a>
                </div>
            </form>
        </section>
    );
}
