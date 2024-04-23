import React, { useState } from 'react';

export default function JobComponent() {
    const [jobs, setJobs] = useState([]);
    const [newJob, setNewJob] = useState('');
    const [newCompany, setNewCompany] = useState('');
    const [newAddress, setNewAddress] = useState('');
    const [newStatus, setNewStatus] = useState('');

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

    return (
        <section className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">Saved Jobs</h2>
            <div className="mb-4">
                <label className="block mb-2">Job Title</label>
                <input
                    className="border border-gray-300 rounded px-4 py-2 mb-2 w-full"
                    type="text"
                    value={newJob}
                    onChange={(e) => setNewJob(e.target.value)}
                />
                <label className="block mb-2">Company</label>
                <input
                    className="border border-gray-300 rounded px-4 py-2 mb-2 w-full"
                    type="text"
                    value={newCompany}
                    onChange={(e) => setNewCompany(e.target.value)}
                />
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
                        <th className="py-2 px-4 bg-gray-200 text-gray-700">Job Title</th>
                        <th className="py-2 px-4 bg-gray-200 text-gray-700">Company</th>
                        <th className="py-2 px-4 bg-gray-200 text-gray-700">Address</th>
                        <th className="py-2 px-4 bg-gray-200 text-gray-700">
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
                        </th>
                        <th className="py-2 px-4 bg-gray-200 text-gray-700">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {jobs.map((job, index) => (
                        <tr key={index} className="border-b border-gray-200">
                            <td className="py-2 px-4">{job.title}</td>
                            <td className="py-2 px-4">{job.company}</td>
                            <td className="py-2 px-4">{job.address}</td>
                            <td className="py-2 px-4">
                                <input
                                    className="border border-gray-300 rounded px-2 py-1"
                                    type="text"
                                    value={job.status}
                                    onChange={(e) => updateStatus(index, e.target.value)}
                                />
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
