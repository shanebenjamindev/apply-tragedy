import * as actions from './types';
import api from '../apiUltils';

export const fetchJobs = () => {
    return (dispatch) => {
        dispatch(fetchJobsRequest()); // Corrected dispatch function call
        api.get('/jobs/get-all')
            .then((result) => {
                const { data } = result.data
                dispatch(fetchJobsSuccess(data))
            })
            .catch((error) => {
                dispatch(fetchJobsFail(error.response.data));
            });
    };
};

const fetchJobsRequest = () => ({ type: actions.FETCH_JOBS_REQUEST });
const fetchJobsSuccess = (data) => ({ type: actions.FETCH_JOBS_SUCCESS, payload: data });
const fetchJobsFail = (error) => ({ type: actions.FETCH_JOBS_FAILURE, payload: error });

export const actDeleteJob = (id) => {
    return (dispatch) => {
        api.delete(`/jobs/delete/${id}`)
            .then(() => {
                dispatch({ type: actions.DELETE_JOB });
                dispatch(fetchJobs());
            })
            .catch((error) => {
                alert(error.message); // Display error message to user
            });
    };
};

export const actAddJob = (newJob) => {
    console.log(newJob);
    return (dispatch) => {
        api.post(`/jobs/create`, newJob)
            .then((result) => {
                dispatch(fetchJobs());
                dispatch({ type: actions.ADD_JOB });
                alert(result.data.message);
            })
            .catch((error) => {
                console.error(error.response.data);
            });
    };
};
