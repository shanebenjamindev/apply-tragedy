import React from 'react';
import { Link } from 'react-router-dom';
import JobComponent from '../../../components/JobComponent/JobComponent';
import ApplyComponent from '../../../components/ApplyComponent/ApplyComponent';

export default function Apply() {

    return (
        <div className='w-8/12 m-auto py-5'>
            <ApplyComponent />
            <JobComponent />
        </div>
    )

}