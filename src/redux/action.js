import * as actions from './types'
import api from '../apiUltils'

export const fetchJobs = () => {
    return (dispatch) => {
        dispatch(fetchJobsRequest)
console.log("aaaa");
        api.get('/jobs/get-all')
            .then((result) => {
                console.log(result.data);
                // if (result.data.statusCode === 200) {
                // dispatch(fetchJobsSucess(result.data.content))
                // }
            })
            .catch((error) => {
                console.log(error);
                // dispatch(fetchJobsFail(error.response.data))
            })
    }
}

const fetchJobsRequest = () => ({ type: actions.FETCH_JOBS_REQUEST })
const fetchJobsSucess = (data) => ({ type: actions.FETCH_JOBS_SUCCESS, payload: data })
const fetchJobsFail = (error) => ({ type: actions.FETCH_JOBS_FAILURE, payload: error })