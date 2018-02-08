import { combineReducers } from 'redux';
import { loginReducers } from './loginReducer';
import { errorReducers } from './errorReducer';

export default combineReducers({
    login: loginReducers,
    error: errorReducers
});