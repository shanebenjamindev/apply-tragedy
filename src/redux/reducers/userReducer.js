// reducers/jobReducer.js
import { SetLocalUser } from '../../hooks/userHooks';
import * as actions from '../types'


const initialState = {
    data: "",
    loading: false,
    error: null,
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {

        case actions.SIGNUP_REQUEST:
            state.loading = true;
            state.data = null;
            state.error = null;
            return { ...state }

        case actions.SIGNIN_REQUEST:
            state.loading = true;
            state.data = null;
            state.error = null;
            return { ...state }

        case actions.SIGNIN_SUCCESS:
            state.loading = false;
            SetLocalUser(action.payload)
            state.error = null;
            return { ...state }

        default:
            return state;
    }
};

export default userReducer;
