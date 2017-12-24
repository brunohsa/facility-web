export function login(state = null, action) {
    if(action.type === 'LOGIN') {
        console.log(action.login);
        return action.login;
    }
    return state;
}

export function error(state = null, action) {
    if(action.type === 'ERROR') {
        return action.error;
    }
    return state;
}