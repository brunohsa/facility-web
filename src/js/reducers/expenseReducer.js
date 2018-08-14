import actionTypes from '../actions/actionTypes';

export function expenseReducers(state = {}, action) {    
    switch(action.type) {
        case actionTypes.FIND_EXPENSES:
            return { 
                expenses: action.expenses 
            }
        default:
            return state;
    }
}
