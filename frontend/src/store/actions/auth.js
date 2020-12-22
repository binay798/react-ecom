import * as actionTypes from './actions';

export const getUser = (user) => {
    return {
        type: actionTypes.GET_USER,
        payload: {
            user
        }
    }
}

export const logout = () => {
    return {
        type: actionTypes.LOGOUT
    }
}