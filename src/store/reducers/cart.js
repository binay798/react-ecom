import * as actionTypes from '../actions/actions';
import { getNewState } from '../utility';
const initialState = {
    productsInCart:[],
    grandTotal: 0
}

const reducer = ( state = initialState, action ) => {
    switch(action.type) {
        case actionTypes.ADD_TO_CART:
            
            let newState = getNewState(state);
            return {
                ...newState,
                productsInCart: [...newState.productsInCart,action.payload.data]
            };
        default:
            return state;
    }
}

export default reducer;