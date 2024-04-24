import React, { useEffect, useState } from 'react';

export default function JobComponent({ user }) {
    const [jobs, setJobs] = useState([]);
    const [newJob, setNewJob] = useState('');
    const [newCompany, setNewCompany] = useState('');
    const [newAddress, setNewAddress] = useState('');
    const [newStatus, setNewStatus] = useState('');
    const [editIndex, setEditIndex] = useState(null);

    // Load jobs from localStorage on component mount
    useEffect(() => {
        const storedJobs = localStorage.getItem(`USER_${user}_jobs`);
        if (storedJobs) {
            setJobs(JSON.parse(storedJobs));
        }
    }, [user]);

    // Save jobs to localStorage whenever jobs state changes
    useEffect(() => {
        localStorage.setItem(`USER_${user}_jobs`, JSON.stringify(jobs));
    }, [jobs, user]);


    const addJob = () => {
        if (newJob.trim() !== '') {
            const job = {
                title: newJob,
                company: newCompany,
                address: newAddress,
                status: newStatus || 'Pending'
            };
            setJobs([...jobs, job]);
            setNewJob('');
            setNewCompany('');
            setNewAddress('');
            setNewStatus('');
        }
    };

    const deleteJob = (index) => {
        const updatedJobs = [...jobs];
        updatedJobs.splice(index, 1);
        setJobs(updatedJobs);
    };

    const updateStatus = (index, newStatus) => {
        const updatedJobs = [...jobs];
        updatedJobs[index].status = newStatus;
        setJobs(updatedJobs);
    };


    const openEditModal = (index) => {
        setEditIndex(index);
        setNewJob(jobs[index].title);
        setNewCompany(jobs[index].company);
        setNewAddress(jobs[index].address);
        setNewStatus(jobs[index].status);
    };

    const closeEditModal = () => {
        setEditIndex(null);
        setNewJob('');
        setNewCompany('');
        setNewAddress('');
        setNewStatus('');
    };

    const saveEditedJob = () => {
        const updatedJobs = [...jobs];
        updatedJobs[editIndex] = {
            title: newJob,
            company: newCompany,
            address: newAddress,
            status: newStatus
        };
        setJobs(updatedJobs);
        closeEditModal();
    };


    return (
        <section className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">Saved Jobs</h2>
            <div className="mb-4">

                <label className="block mb-2">Company</label>
                <input
                    className="border border-gray-300 rounded px-4 py-2 mb-2 w-full"
                    type="text"
                    value={newCompany}
                    onChange={(e) => setNewCompany(e.target.value)}
                />


                <label className="block mb-2">Job Title</label>
                <select
                    className="border border-gray-300 rounded px-4 py-2 mb-2 w-full"
                    value={newJob}
                    onChange={(e) => setNewJob(e.target.value)}
                >
                    <option value="fullstack">Fullstack Developer</option>
                    <option value="web">Web Developer</option>
                    <option value="frontend">Front End Developer</option>
                </select>



                <label className="block mb-2">Address</label>
                <input
                    className="border border-gray-300 rounded px-4 py-2 mb-2 w-full"
                    type="text"
                    value={newAddress}
                    onChange={(e) => setNewAddress(e.target.value)}
                />
                <label className="block mb-2">Status</label>
                <select
                    className="border border-gray-300 rounded px-4 py-2 mb-2 w-full"
                    value={newStatus}
                    onChange={(e) => setNewStatus(e.target.value)}
                >
                    <option value="Pending">Pending</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                </select>
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={addJob}
                >
                    Add
                </button>
            </div>
            <table className="w-full">
                <thead>
                    <tr>
                        <th className="py-2 px-4 bg-gray-200 text-gray-700">Company</th>
                        <th className="py-2 px-4 bg-gray-200 text-gray-700">Job Title</th>
                        <th className="py-2 px-4 bg-gray-200 text-gray-700">Address</th>
                        <th className="py-2 px-4 bg-gray-200 text-gray-700">Status</th>
                        <th className="py-2 px-4 bg-gray-200 text-gray-700">Next Step</th>
                        <th className="py-2 px-4 bg-gray-200 text-gray-700">Note</th>
                        <th className="py-2 px-4 bg-gray-200 text-gray-700">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {jobs.map((job, index) => (
                        <tr key={index} className="border-b border-gray-200">
                            <td className="py-2 px-4">{job.company}</td>
                            <td className="py-2 px-4">{job.title}</td>
                            <td className="py-2 px-4">{job.address}</td>
                            <td className="py-2 px-4">
                                <select
                                    className="border border-gray-300 rounded px-4 py-2 mb-2 w-full"
                                    value={newStatus}
                                    onChange={(e) => setNewStatus(e.target.value)}
                                >
                                    <option value="Pending">Pending</option>
                                    <option value="In Progress">Interview</option>
                                    <option value="In Progress">In Progress</option>
                                    <option value="Completed">Completed</option>
                                </select>
                            </td>
                            <td className="py-2 px-4">
                                <textarea ></textarea>
                            </td>
                            <td className="py-2 px-4">
                                <textarea ></textarea>
                            </td>
                            <td className="py-2 px-4">
                                <button
                                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                                    onClick={() => deleteJob(index)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    );
}
