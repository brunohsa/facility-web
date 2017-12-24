import { doLogin, error } from '../actions/loginActionCreator'

class LoginAPI {
    
    static doLogin(user, password) {
        return dispatch => {
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
                if (json.status) {
                    dispatch(error(json));
                } else {
                    dispatch(doLogin(json));
                    dispatch(error(''));
                }
                return json;
            })
            .catch(error => {
                console.log(error.message);
            });
        }
    }
}

export default LoginAPI;