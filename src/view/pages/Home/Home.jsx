import React from 'react';
import ApplyComponent from '../../../components/ApplyComponent/ApplyComponent';

export default function Home() {
    return (
        <div className='w-8/12 m-auto py-5'>


            <div className='py-5'>
                <ApplyComponent />
            </div>


            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 justify-center'>
                <div className='bg-gray-200 p-5'>Interview
                    <p>Number</p>
                </div>
                <div className='bg-gray-200 p-5'>Fails
                    <p>Number</p>
                </div>
                <div className='bg-gray-200 p-5'>Applied
                    <p>Number</p>
                </div>
                <div className='bg-gray-200 p-5'>Saved
                    <p>Number</p>
                </div>
            </div>

        </div>
    );
}
