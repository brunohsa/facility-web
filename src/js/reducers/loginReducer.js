import { LOGIN } from '../actions/ActionTypes';

export function loginReducers(state = null, action) {
    
    switch(action.type) {
        case LOGIN:
            console.log(action.login);
            return action.login;
        default:
            return state;
    }
}