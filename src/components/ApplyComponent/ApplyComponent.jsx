import React from 'react';

export default function ApplyComponent() {

    return (
        <section>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 justify-center'>
                <a className='bg-gray-200 p-5' href="https://www.topcv.vn/">TopCV</a>
                <a href="https://www.topdev.vn/" className='bg-gray-200 p-5'>TopDev</a>
                <a href="https://www.itviec.com/" className='bg-gray-200 p-5'>ItViec</a>
            </div>
        </section>
    )

}