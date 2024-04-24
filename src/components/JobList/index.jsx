// src/components/JobList.js
import React, { useState } from 'react';
import JobEntry from '../JobEntry';
import PropTypes from 'prop-types';

const JobList = ({ jobs }) => {
  const [jobList, setJobList] = useState(jobs);

  const handleStatusChange = (id, newStatus) => {
    const updatedJobList = jobList.map((job) => {
      if (job.id === id) {
        return { ...job, status: newStatus };
      }
      return job;
    });
    setJobList(updatedJobList);
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Job Position</th>
          <th>Company</th>
          <th>Status</th>
          <th>Date Saved</th>
          <th>Date Applied</th>
          <th>Follow up</th>
        </tr>
      </thead>
      <tbody>
        {jobList.map((job) => (
          <JobEntry
            key={job.id}
            job={job}
            onStatusChange={handleStatusChange}
          />
        ))}
      </tbody>
    </table>
  );
};

JobList.propTypes = {
  jobs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      position: PropTypes.string.isRequired,
      company: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
      dateSaved: PropTypes.string.isRequired,
      dateApplied: PropTypes.string.isRequired,
      followUp: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default JobList;