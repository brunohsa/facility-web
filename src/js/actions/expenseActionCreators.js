import actionTypes from './actionTypes';

let expenseActions = {
    
    findExpenses(expenses) {
        return {
            type: actionTypes.FIND_EXPENSES,
            expenses: expenses
        }
    }
}

export default expenseActions;