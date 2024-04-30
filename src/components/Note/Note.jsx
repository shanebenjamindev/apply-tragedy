import { Button } from 'antd';
import React, { useState } from 'react';
export default function Note({ note }) {
    const [{ open }, setOpen] = useState(note);

    return (
        <div className='fixed bottom-1 right-2 z-20'>
            <div className='text-right'>
                <Button onClick={() => setOpen(!open)}>Note</Button>
            </div>
            <div style={{ display: open ? 'block' : 'none' }} className=" fixed bottom-10 right-0 bg-slate-700 text-white p-2">
                <div className='p-4'>
                    <h2 className="text-2xl font-bold mb-4">Release Note:</h2>
                    <p>This Project is still ongoing</p>
                    <p>Build date: 27/04/2024</p>
                    <p>Author: Giang</p>
                    <p>Note:</p>
                    <div className='text-yellow-600'>
                        <p>Now you can register, login, add, filter status, delete jobs</p>
                    </div>
                    <p>I am using MERN, Administrators will be available soon</p>
                </div>
            </div>
        </div>
    );
}
