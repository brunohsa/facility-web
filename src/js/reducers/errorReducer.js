import actionTypes from '../actions/actionTypes';

export function errorReducers(state = null, action) {    
    switch(action.type) {
        case actionTypes.SEND_ERROR:
            return action.error;
        default:
            return state;
    }
}