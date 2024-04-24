import React, { useState } from 'react';
import JobService from '../../services/JobServices';

function AddJobForm({ user }) {
    const [jobData, setJobData] = useState({
        position: 'Operations Manager',
        company: 'Acme Corp',
        status: 'Bookmarked',
        dateSaved: '04/25/2024',
        dateApplied: '04/25/2024',
        followUp: '04/28/2024'
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await JobService.addJob(user, jobData);
            // Reset form fields after successful submission
            setJobData({
                position: '',
                company: '',
                status: '',
                dateSaved: '',
                dateApplied: '',
                followUp: ''
            });
            // Optionally, you can trigger a refresh of job data after adding a new job
            // You can implement this by updating state or refetching data from the backend
        } catch (error) {
            console.error('Error adding job:', error.message);
        }
    };

    const handleChange = (e) => {
        setJobData({ ...jobData, [e.target.name]: e.target.value });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="position" value={jobData.position} onChange={handleChange} placeholder="Job Position" required />
            <input type="text" name="company" value={jobData.company} onChange={handleChange} placeholder="Company" required />
            <input type="text" name="status" value={jobData.status} onChange={handleChange} placeholder="Status" required />
            <input type="text" name="dateSaved" value={jobData.dateSaved} onChange={handleChange} placeholder="Date Saved" required />
            <input type="text" name="dateApplied" value={jobData.dateApplied} onChange={handleChange} placeholder="Date Applied" required />
            <input type="text" name="followUp" value={jobData.followUp} onChange={handleChange} placeholder="Follow Up" required />
            <button type="submit">Add Job</button>
        </form>
    );
}

export default AddJobForm;
