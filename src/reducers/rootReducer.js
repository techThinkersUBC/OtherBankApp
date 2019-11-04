import { combineReducers } from 'redux';
import AuthReducer from './authReducer.jsx';

const rootReducer = combineReducers({
    auth: AuthReducer,
});

export default rootReducer;
