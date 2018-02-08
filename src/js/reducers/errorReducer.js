import { ERROR } from '../actions/ActionTypes';

export function errorReducers(state = null, action) {

    switch(action.type) {
        case ERROR:
            return action.error;
        default:
            return state;
    }
}