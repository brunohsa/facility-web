import errorActions from '../actions/errorActionCreators'
import expenseActions from '../actions/expenseActionCreators'
import configs from '../config';

let expenseAPI = {

   findExpenses(token) {
        return (dispatch) => {
            fetch(configs.API_URL + 'expenses/all', { 
                method: 'GET',
                headers: {
                    token: token
                }
            })
            .then(response => {
                return response.json();
            })
            .then(response => {
                dispatch(expenseActions.findExpenses(response));
                return response;
            })
            .catch(e => {
                console.log(e.message);
                dispatch(errorActions.sendError(e.message));
            });
        }
    }
    
}

export default expenseAPI;