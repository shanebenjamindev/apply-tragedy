// store.js
import { thunk } from 'redux-thunk';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import jobReducer from '../redux/reducers/jobReducer';
import userReducer from '../redux/reducers/userReducer';
const rootReducer = combineReducers({
    jobReducer,
    userReducer
    // Add more reducers if needed
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
