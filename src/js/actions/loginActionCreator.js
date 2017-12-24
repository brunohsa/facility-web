export function doLogin(login) {
    return {
        type: 'LOGIN', 
        login
    }
}

export function error(error) {
    return {
        type: 'ERROR', 
        error: { error }
    }
}