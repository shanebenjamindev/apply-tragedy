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

export const actStatusUpdate = (id, newStatus) => {
    return (dispatch) => {
        const status = newStatus
        api.put(`/jobs/update-status/${id}`, { status })
            .then((result) => {
                alert(result.data.message);
                window.location.reload()
            })
            .catch((error) => {
                alert(error.message);
            });
    };
};
// const actStatusUpdateRequest = () => ({ type: actions.STATUS_REQUEST });

export const actAddJob = (newJob) => {
    return (dispatch) => {
        api.post(`/jobs/create`, newJob)
            .then((result) => {
                // console.log(result);
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
        dispatch(actSignUpRequest)
        api.post(`/user/sign-up`, newUser)
            .then((result) => {
                if (result.status === 200) {
                    if (result.data.status === "ERR") {
                        dispatch(actSignUpFail(result.data.message));
                    }
                    if (result.data.status === "OK") {
                        dispatch(actSignUpSuccess(result.data.message))
                        navigate("/sign-in")
                    }
                };
            })
            .catch((error) => {
                console.log(error);
            })
    }
}

const actSignUpRequest = () => ({ type: actions.SIGNUP_REQUEST })
const actSignUpSuccess = (data) => ({ type: actions.SIGNUP_SUCCESS, payload: data })
const actSignUpFail = (error) => ({ type: actions.SIGNUP_FAIL, payload: error })

export const actSignIn = (user) => {
    return (dispatch) => {
        dispatch(actLoginRequest)
        api.post(`/user/sign-in`, user)
            .then((result) => {
                if (result.status === 200) {
                    if (result.data.status === "ERR") {
                        console.log(result.data);
                        dispatch(actLoginFail(result.data.message));
                    }
                    if (result.data.status === "OK") {
                        console.log(result.data);
                        dispatch(actLoginSuccess(result.data))
                    }
                };
            })
            .catch((error) => {
                console.log(error);
            })
    }
}

const actLoginRequest = () => ({ type: actions.SIGNIN_REQUEST })
const actLoginSuccess = (data) => ({ type: actions.SIGNIN_SUCCESS, payload: data })
const actLoginFail = (error) => ({ type: actions.SIGNIN_FAIL, payload: error })