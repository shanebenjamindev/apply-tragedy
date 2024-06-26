import React from 'react';

export default function ApplyComponent() {

    return (
        <section>
            <div className='grid text-white grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 justify-center'>
                <a className='bg-green-500 p-5 hover:shadow-lg' href="https://www.topcv.vn/" target="_blank" rel="noopener noreferrer">TopCV</a>
                <a className='bg-red-900 p-5 hover:shadow-lg' href="https://www.topdev.vn/" target="_blank" rel="noopener noreferrer">TopDev</a>
                <a className='bg-red-700 p-5 hover:shadow-lg' href="https://www.itviec.com/" target="_blank" rel="noopener noreferrer">ItViec</a>
            </div>
        </section>
    );
}
