// store.js
import {thunk} from 'redux-thunk';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import jobReducer from '../redux/reducers/jobReducer';
const rootReducer = combineReducers({
    jobReducer,
    // Add more reducers if needed
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
