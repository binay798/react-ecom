import * as actionTypes from './actions';

export const showNotification = (content) => {
    return {
        type: actionTypes.SHOW_NOTIFICATION,
        payload: content
    }
}

export const hideNotification = () => {
    console.log('hide')
    return {
        type: actionTypes.HIDE_NOTIFICATION
    }
}