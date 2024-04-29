import React from 'react';
import ApplyComponent from '../../../components/ApplyComponent/ApplyComponent';
import JobComponent from '../../../components/JobComponent/JobComponent';
import Note from '../../../components/Note/Note';
import { GetUser } from '../../../hooks/userHooks';
import './style.css';
import { Link } from 'react-router-dom';

export default function Home() {
    const user = GetUser();

    return (
        <div className='home-container'>
            <div className='bg'>
                <Note />
                {user ?
                    <div className='bg-white z-30'>
                        <JobComponent user={user} />
                    </div>
                    :
                    <div className='welcome-container z-30 text-white md:w-5/12 absolute p-5 top-[20%]'>
                        <h1 className='title-extra-large'>Welcome to Apply Tragedy</h1>
                        <p className='description my-4'>
                            Hello, I'm Giang, and I've built this project from scratch. Apply Tragedy is a platform designed to streamline your job application process. Whether you're searching for new opportunities or managing your existing applications, we've got you covered.
                        </p>
                        <div >
                            <Link className='title-button' to='/sign-in'>
                                <button className='get-started-button'>GET STARTED</button>
                            </Link>
                        </div>
                    </div>
                }
            </div>
        </div>
    );
}
