import React from 'react';
import ApplyComponent from '../../../components/ApplyComponent/ApplyComponent';
import JobComponent from '../../../components/JobComponent/JobComponent';

export default function Home() {
    return (
        <div className='py-5 md:flex w-full gap-10'>

            <div className='p-3 flex justify-center'>
                <div>
                    <ApplyComponent />
                    <h2 className="text-2xl font-bold mb-4">Release Note:</h2>
                    <p>This Project still on going</p>
                    <p>Build in: 27/04/2024</p>
                    <p>Author: Giang</p>
                    <p>Note:
                        I am using MERN, Login, Authentication will be soon available
                        Added Job Component (count, select, filter)</p>
                    <p>Now you can delete add, filter status, delete jobs</p>

                </div>
            </div>
            <div className=''>

                <JobComponent />
            </div>


            {/* <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 justify-center'>
        
            </div> */}

        </div>
    );
}
