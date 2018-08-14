import actionTypes from '../actions/actionTypes';

export function loginReducers(state = {}, action) {
    switch(action.type) {
        case actionTypes.DO_LOGIN:
            return action.login;
        default:
            return state;
    }
}