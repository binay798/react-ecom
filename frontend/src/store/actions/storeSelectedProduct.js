import * as actionTypes from './actions';

export const storeSelectedProduct = data => {
    return {
        type: actionTypes.STORE_SELECTED_PRODUCT,
        payload: {
            data: data
        }
    }
}