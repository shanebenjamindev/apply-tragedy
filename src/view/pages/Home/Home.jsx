import React, { useEffect, useState } from 'react';
import ApplyComponent from '../../../components/ApplyComponent/ApplyComponent';
import JobComponent from '../../../components/JobComponent/JobComponent';
import Note from '../../../components/Note/Note';
import { GetUser } from '../../../hooks/userHooks';
import './style.css';
import { Link } from 'react-router-dom';
import { Select } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { fetchJobs } from '../../../redux/action';

const { Option } = Select;

export default function Home() {
    const user = GetUser();
    const dispatch = useDispatch();
    const listStatus = ['Bookmarked', 'Applying', 'Interview', 'Pending', 'Accepted', 'Closed']
    const listJob = useSelector(state => state.jobReducer.data);

    useEffect(() => {
        if (user !== null) {
            dispatch(fetchJobs(user?.userData?._id));
        }
    }, []);

    const [filter, setFilter] = useState(null);
    const [activeFilter, setActiveFilter] = useState(null)

    const handleFilter = (filterValue) => {
        setFilter(filterValue);
    };
    const filteredJobs = filter ? listJob.filter(job => job.status === filter) : listJob;


    const countJobs = (status) => {
        if (listJob) {
            return listJob.filter(job => job.status === status).length;
        }
    };

    return (
        <main className='home-container'>
            <div className='bg'>
                {/* <Note note={open} setOpen={setOpen} /> */}
                {user ?
                    <section className='bg-white z-30'>
                        <h1 className='main-title'>Welcome, {user?.userData.lastName || "User"}</h1>
                        <div className='flex md:hidden p-4'>
                            <Select className='w-3/5' placeholder="Status" optionLabelProp="label" onChange={(e) => handleFilter(e)}>
                                {listStatus.map((status) => (
                                    <Option key={status}>{status} {countJobs(status)}</Option>
                                ))}
                            </Select>
                        </div>
                        <div className="hidden md:flex process-container">
                            {listStatus.map((status, index) => (
                                <button
                                    key={index}
                                    className={`job-pipeline-button ${activeFilter === status ? 'active' : ''}`}
                                    onClick={() => handleFilter(status)}
                                >
                                    <div className="section-value h4">{countJobs(status)}</div>
                                    <div className="section-label">{status}</div>
                                </button>
                            ))}
                        </div>
                        <JobComponent user={user} listJob={filteredJobs} />
                    </section>
                    :
                    <div className='welcome-container z-30 text-white md:w-5/12 absolute p-5 top-[20%]'>
                        <h1 className='title-extra-large'>Welcome to Apply Tragedy</h1>
                        <p className='description my-4'>
                            Hello, I'm Giang, and I've built this project from scratch. Apply Tragedy is a platform designed to streamline your job application process. <br></br> Whether you're searching for new opportunities or managing your existing applications, I've got you covered.
                        </p>
                        <div >
                            <Link className='title-button' to='/sign-up'>
                                <button className='get-started-button'>GET STARTED</button>
                            </Link>
                        </div>
                    </div>
                }
            </div>
        </main>
    );
}
