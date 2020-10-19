import * as actionTypes from '../actions/actions';

const initialState = {
    selectedProduct: null
}

const reducer = (state = initialState,action) => {
    switch(action.type) {
        case actionTypes.STORE_SELECTED_PRODUCT:
            return {
                ...state,
                selectedProduct: action.payload.data
            };
        default:
            return state;
    }
}
export default reducer;