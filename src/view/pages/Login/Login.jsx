import React from 'react';

export default function Login() {
    return (
        <section className='flex h-screen justify-center items-center w-screen'>
            <form className='text-center rounded'>
                <h2 className='mb-3'>
                    Login
                </h2>
                <div className='flex gap-3'>
                    <div>
                        <div>
                            <label className='mr-5'>Username</label>
                            <input className='border-b-2' placeholder='username' type='text' name="username" />
                        </div>
                        <div className='mt-2'>
                            <label className='mr-5'>Password</label>
                            <input className='border-b-2' placeholder='password' type='password' name="password" />
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <button className='h-full transition duration-500 ease-in-out bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded'>Login</button>
                    </div>
                </div>
                <div className='mt-2 text-blue-300 hover:text-blue-700 transition-colors duration-500'>
                    <a href="/">back to home</a>
                </div>
            </form>
        </section>
    );
}
