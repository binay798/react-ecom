import * as actionTypes from './actions';

export const addProductToCart = data => {
    return {
        type: actionTypes.ADD_TO_CART,
        payload: {
            data: data,
        }
    }
}

export const increaseCartItem = (id) => {
    return {
        type: actionTypes.INCREASE_CART_ITEM,
        payload: {
            data: id
        }
    }
}

export const decreaseCartItem = (id) => {
    return {
        type: actionTypes.DECREASE_CART_ITEM,
        payload: {
            data: id
        }
    }
}

export const deleteCartItem = id => {
    return {
        type: actionTypes.DELETE_CART_ITEM,
        payload: {
            id: id
        }
    }
}