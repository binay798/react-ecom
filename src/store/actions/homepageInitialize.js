import * as actionTypes from './actions';

export const initialize = (data) => {
    return {
        type: actionTypes.INITIALIZE,
        payload: {
            data: data
        }
    }
}