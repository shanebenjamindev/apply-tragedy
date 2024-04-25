// reducers/jobReducer.js
import * as actions from '../types'


const initialState = {
  data: "",
  loading: false,
  error: null,
};

const jobReducer = (state = initialState, action) => {
  switch (action.type) {

    case actions.FETCH_JOBS_REQUEST:
      state.loading = true;
      state.data = null;
      state.error = null;
      return { ...state }

    case actions.FETCH_JOBS_SUCCESS:
      state.loading = false;
      state.data = action.payload;
      state.error = null;
      return { ...state }

    case actions.FETCH_JOBS_FAILURE:
      state.loading = false;
      state.data = null;
      state.error = action.payload;
      return { ...state }

    case actions.DELETE_JOB:
      return { ...state }

    //   case types.ADD_JOB:
    //   return { ...state, data: [...state.jobs, action.payload] };
    // case types.UPDATE_JOB:
    //   return {
    //     ...state,
    //     data: state.jobs.map((job) =>
    //       job.id === action.payload.id ? action.payload : job
    //     ),
    //   };
    // case types.DELETE_JOB:
    //   return {
    //     ...state,
    //     data: state.jobs.filter((job) => job.id !== action.payload),
    //   };
    default:
      return state;
  }
};

export default jobReducer;
