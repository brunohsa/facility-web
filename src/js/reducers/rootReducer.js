import { combineReducers } from 'redux';
import { loginReducers } from './loginReducer';
import { errorReducers } from './errorReducer';
import { expenseReducers } from './expenseReducer';

export default combineReducers({
    login: loginReducers,
    error: errorReducers,
    expense : expenseReducers
});