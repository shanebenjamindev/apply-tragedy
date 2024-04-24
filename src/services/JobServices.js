// src/services/JobService.js
import axios from 'axios';

const BASE_URL = 'http://localhost:3001/api/'; // Adjust the base URL according to your backend API

const JobService = {
  // Fetch all jobs for a specific user
  fetchJobs: async () => {
    try {
      const response = await axios.get(`${BASE_URL}/jobs/get-all`);
      return response.data;
    } catch (error) {
      throw new Error('Error fetching jobs:', error);
    }
  },

  // Add a new job
  addJob: async (user, jobData) => {
    try {
      const response = await axios.post(`${BASE_URL}/jobs/${user}`, jobData);
      return response.data;
    } catch (error) {
      throw new Error('Error adding job:', error);
    }
  },

  // Update an existing job
  updateJob: async (user, jobId, updatedJob) => {
    try {
      const response = await axios.put(`${BASE_URL}/jobs/${user}/${jobId}`, updatedJob);
      return response.data;
    } catch (error) {
      throw new Error('Error updating job:', error);
    }
  },

  // Delete a job
  deleteJob: async (user, jobId) => {
    try {
      const response = await axios.delete(`${BASE_URL}/jobs/${user}/${jobId}`);
      return response.data;
    } catch (error) {
      throw new Error('Error deleting job:', error);
    }
  }
};

export default JobService;
