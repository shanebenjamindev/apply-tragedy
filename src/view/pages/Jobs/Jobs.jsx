import React from 'react';
import JobComponent from '../../../components/JobComponent/JobComponent';
import { GetUser } from '../../../hooks/userHooks';
import Process from '../../../components/Process/Process';

export default function Jobs() {
    const user = GetUser();
    return (
        <div className='w-8/12 m-auto py-5'>
            <Process />
            <JobComponent user={user} />
        </div>
    )

}