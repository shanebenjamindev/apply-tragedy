import { useMessageError, useMessageSuccess } from '../../components/Message/Message';
import { SetLocalUser } from '../../hooks/userHooks';
import * as actions from '../types'

const initialState = {
    loading: false,
    data: null,
    error: null,
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {

        case actions.SIGNUP_REQUEST:
            state.loading = true;
            state.data = null;
            state.error = null;
            return { ...state }

        case actions.USER_UPDATE:
            state.loading = true;
            state.data = action.payload
            // console.log(data.payload);
            SetLocalUser(state.data)
            state.error = null;
            return { ...state }

        case actions.SIGNUP_SUCCESS:
            state.loading = false;
            useMessageSuccess(`SIGN UP` + "" + action.payload)
            state.error = null;
            return { ...state }

        case actions.SIGNUP_FAIL:
            state.loading = false;
            state.data = null;
            state.error = action.payload;
            useMessageError(state.error)
            return { ...state }

        case actions.SIGNIN_REQUEST:
            state.loading = true;
            state.data = null;
            state.error = null;
            return { ...state }

        case actions.SIGNIN_SUCCESS:
            state.loading = false;
            state.data = action.payload
            SetLocalUser(state.data)
            state.error = null;
            return { ...state }

        case actions.SIGNIN_FAIL:
            state.loading = false;
            state.data = null;
            state.error = action.payload;
            useMessageError(state.error)
            return { ...state }

        default:
            return state;
    }
};

export default userReducer;
