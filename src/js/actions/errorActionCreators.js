import actionTypes from './actionTypes';

let errorActions = {
    
    sendError(error) {
        return {
            type: actionTypes.SEND_ERROR, 
            error
        }
    }
}

export default errorActions;