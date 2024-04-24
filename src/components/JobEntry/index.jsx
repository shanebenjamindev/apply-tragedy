// src/components/JobEntry.js
import React from 'react';
import PropTypes from 'prop-types';

const JobEntry = ({ job, onStatusChange }) => {
  const handleStatusChange = (event) => {
    onStatusChange(job.id, event.target.value);
  };

  return (
    <tr>
      <td>{job.position}</td>
      <td>{job.company}</td>
      <td>
        <select value={job.status} onChange={handleStatusChange}>
          <option value="Bookmarked">Bookmarked</option>
          <option value="Applying">Applying</option>
          <option value="Applied">Applied</option>
          <option value="Interviewing">Interviewing</option>
          <option value="Accepted">Accepted</option>
        </select>
      </td>
      <td>{job.dateSaved}</td>
      <td>{job.dateApplied}</td>
      <td>{job.followUp}</td>
    </tr>
  );
};

JobEntry.propTypes = {
  job: PropTypes.shape({
    id: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    dateSaved: PropTypes.string.isRequired,
    dateApplied: PropTypes.string.isRequired,
    followUp: PropTypes.string.isRequired,
  }).isRequired,
  onStatusChange: PropTypes.func.isRequired,
};

export default JobEntry;