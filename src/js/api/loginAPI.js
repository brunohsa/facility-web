import loginActions from '../actions/loginActionCreators'
import errorActions from '../actions/errorActionCreators'
import configs from '../config';

let loginAPI = {

   doLogin(user, password) {
        return (dispatch) => {
            fetch(configs.API_URL + 'login', {
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
            .then(response => {
                if(hasError(response)) { 
                    throw Error(response.error); 
                }
                return response;
            })
            .then(response => {
                localStorage.setItem('token', response);
                dispatch(loginActions.doLogin(response));
                dispatch(errorActions.sendError(''));
                return response;
            })
            .catch(e => {
                dispatch(errorActions.sendError(e.message));
            });
        }
    }
    
}

function hasError(json) {
    return json.status && json.status !== 200;
}

export default loginAPI;