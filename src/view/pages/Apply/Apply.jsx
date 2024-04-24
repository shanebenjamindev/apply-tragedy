import React from 'react';
import { Link } from 'react-router-dom';
import JobComponent from '../../../components/JobComponent/JobComponent';
import ApplyComponent from '../../../components/ApplyComponent/ApplyComponent';
import { GetUser } from '../../../hooks/userHooks';

export default function Apply() {
    const user = GetUser();
    console.log(user);
    return (
        <div className='w-8/12 m-auto py-5'>
            <ApplyComponent />
            <JobComponent user={user} />
        </div>
    )

}