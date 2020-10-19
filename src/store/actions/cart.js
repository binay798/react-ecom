import * as actionTypes from './actions';

export const addProductToCart = data => {
    return {
        type: actionTypes.ADD_TO_CART,
        payload: {
            data: data,
        }
    }
}