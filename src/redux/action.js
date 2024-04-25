import * as actions from './types'
import api from '../apiUltils'

export const fetchJobs = () => {
    return (dispatch) => {
        dispatch(fetchJobsRequest)
        api.get('/jobs/get-all')
            .then((result) => {
                dispatch(fetchJobsSucess(result.data))
            })
            .catch((error) => {
                dispatch(fetchJobsFail(error.response.data))
            })
    }
}

const fetchJobsRequest = () => ({ type: actions.FETCH_JOBS_REQUEST })
const fetchJobsSucess = (data) => ({ type: actions.FETCH_JOBS_SUCCESS, payload: data })
const fetchJobsFail = (error) => ({ type: actions.FETCH_JOBS_FAILURE, payload: error })

export const actDeleteJob = (id) => {
    return (dispatch) => {
        api.delete(`/jobs/delete/${id}`)
            .then(() => {
                dispatch({ type: actions.DELETE_JOB })
                dispatch(fetchJobs())
            })
            .catch((error) => {
                alert(error.message)
            })
    }
}
