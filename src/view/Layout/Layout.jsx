import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';

export default function Content() {

    return (
        // <main className='flex h-screen' style={{ overflowY: "scroll" }}>
        //     <div className=' flex-col md:w-2/12'>
        //         <Sidebar />
        //     </div>
        //     <div className=' md:w-10/12'>
        //         <Outlet />
        //     </div>
        // </main>
        <main>
            <Header />
            <Outlet />
        </main>
    )

}