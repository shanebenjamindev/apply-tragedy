import * as actions from './types';
import api from '../apiUltils';

export const fetchJobs = (id) => {
    return (dispatch) => {
        dispatch(fetchJobsRequest); // Corrected dispatch function call
        api.get(`/jobs/get-all-user-job/${id}`)
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
            .then((result) => {
                alert(result.data);
                window.location.reload()
                // dispatch({ type: actions.DELETE_JOB });
                // dispatch(fetchJobs());
            })
            .catch((error) => {
                alert(error.message);
            });
    };
};

export const actAddJob = (newJob) => {
    return (dispatch) => {
        api.post(`/jobs/create`, newJob)
            .then((result) => {
                console.log(result);
                dispatch(fetchJobs(newJob.user))
                dispatch({ type: actions.ADD_JOB });
                alert(result.data.message);
            })
            .catch((error) => {
                // const {  } = error.data
                console.error(error.message);
            });
    };
};


export const actSignUp = (newUser, navigate) => {
    return (dispatch) => {
        api.post(`/user/sign-up`, newUser)
            .then((result) => {
                if (result.status === 200) {
                    if (result.data.status === "ERR") {
                        const { message } = result.data
                        alert(message)
                    }
                    else if (result.data.status === "OK") {
                        alert("sign up successfully!")
                        navigate("/")
                    }
                }
            })
            .catch((error) => {
                console.log(error);
            })
    }
}


const actUserRequest = () => ({ type: actions.SIGNUP_REQUEST });


export const actSignIn = (user, navigate) => {
    return (dispatch) => {
        dispatch(actLoginRequest)
        api.post(`/user/sign-in`, user)
            .then(async (result) => {
                if (result.status === 200) {
                    if (result.data.status === "ERR") {
                        const { message } = result.data
                        alert(message)
                    }
                    else if (result.data.status === "OK") {
                        const { data } = result
                        await dispatch(actLoginSuccess(data))
                        alert("sign in successfully!")
                        navigate("/")
                    }
                }
            })
            .catch((error) => {
                console.log(error);
            })
    }
}

const actLoginRequest = () => ({ type: actions.SIGNIN_REQUEST })
const actLoginSuccess = (data) => ({ type: actions.SIGNIN_SUCCESS, payload: data })