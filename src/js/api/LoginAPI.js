import { login, error } from '../actions/loginActionCreator'

let LoginAPI = {
   doLogin(user, password) {
        return (dispatch) => {
            fetch('http://192.168.0.17:8090/login', {
                method: 'POST',
                headers: {
                    Accept: 'application/json'
                },
                body: JSON.stringify({
                    userName: user,
                    password: password
                })
            })
            .then(response => {
                return response.json();
            })
            .then(json => {
                if(json.status && json.status !== 200) { 
                    throw Error(json.cause); 
                }
                setToken(json.token);
                dispatch(login(json));
                dispatch(error(''));
                return json;
            })
            .catch(e => {
                dispatch(error(e.message));
            });
        }
    }
}

function setToken(token) {
    localStorage.setItem('token', token);
}

export default LoginAPI;