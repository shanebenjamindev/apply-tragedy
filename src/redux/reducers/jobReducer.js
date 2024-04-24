// reducers/jobReducer.js
import * as types from '../types';

const initialState = {
  jobs: [],
  loading: false,
  error: null,
};

const jobReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_JOBS_REQUEST:
      return { ...state, loading: true, error: null };
    case types.FETCH_JOBS_SUCCESS:
      return { ...state, loading: false, jobs: action.payload, error: null };
    case types.FETCH_JOBS_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case types.ADD_JOB:
      return { ...state, jobs: [...state.jobs, action.payload] };
    case types.UPDATE_JOB:
      return {
        ...state,
        jobs: state.jobs.map((job) =>
          job.id === action.payload.id ? action.payload : job
        ),
      };
    case types.DELETE_JOB:
      return {
        ...state,
        jobs: state.jobs.filter((job) => job.id !== action.payload),
      };
    default:
      return state;
  }
};

export default jobReducer;
