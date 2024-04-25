import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actDeleteJob, fetchJobs } from '../../redux/action';
import Loading from '../Loading';
import './style.css';

export default function JobComponent() {
    const dispatch = useDispatch();

    const jobs = useSelector(state => state.jobReducer.data);
    useEffect(() => {
        dispatch(fetchJobs())
    }, [dispatch]);

    const handleDeleteJob = (id) => {
        dispatch(actDeleteJob(id))
    }

    const renderJobs = () => {
        return jobs?.map((job, index) => (
            <tr key={index} className="border-b border-gray-200">
                <td className="py-2 px-4">{job.company}</td>
                <td className="py-2 px-4">{job.position}</td>
                <td className="py-2 px-4">{job.address}</td>
                <td className="py-2 px-4">
                    <select defaultValue={job.status}>
                        <option>
                            {job.status}
                        </option>
                    </select>

                </td>
                <td className="py-2 px-4">{job.followUp}</td>
                <td className="py-2 px-4">{job.note}</td>
                <td className="py-2 px-4">
                    <button
                        className="bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded"
                        onClick={() => handleDeleteJob(job._id)}
                    >
                        Delete
                    </button>
                </td>
            </tr>
        ))
    }
    return (
        <section className="jobs-container">
            <h2 className="text-2xl font-bold mb-4">Saved Jobs</h2>
            <div className="mb-4">
            
            </div>
            {jobs ?
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
                        {renderJobs()}
                    </tbody>
                </table>
                : <Loading />
            }
        </section>
    );
}
