import { LOGIN } from './ActionTypes';

export function login(login) {
    return {
        type: LOGIN, 
        login
    }
}

export function error(error) {
    return {
        type: 'ERROR', 
        error
    }
}