import * as actionTypes from '../actions/actions';
import { getNewState } from '../utility';
import produce from 'immer';



const initialState = {
    productsInCart:[],
    grandTotal: 0,
}

const reducer = ( state = initialState, action ) => {
    switch(action.type) {
        case actionTypes.ADD_TO_CART:
            let newState = getNewState(state);
            return {
                ...newState,
                productsInCart: [...newState.productsInCart,action.payload.data],
            };
        case actionTypes.INCREASE_CART_ITEM:
            let nextState = produce(state,next => {
                next.productsInCart.forEach(item => {

                    if(item.id === action.payload.data) {
                        item.totalPrice = item.price * (item.count + 1)
                        item.count = item.count + 1;
                    }
                })
            }) ;
            return nextState;
        case actionTypes.DECREASE_CART_ITEM:
            let nextStateDecreased = produce(state,next => {

                next.productsInCart.forEach(item => {
                    if(item.id === action.payload.data) {
                        item.totalPrice = item.price * (item.count - 1)
                        item.count = item.count - 1;
                    }
                })
            }) ;
            return nextStateDecreased;
        case actionTypes.DELETE_CART_ITEM:
            let nextStateDelete = produce(state,next => {
                next.productsInCart = next.productsInCart.filter(item => {
                    return item.id !== action.payload.id
                })
            })
            return nextStateDelete;
            
        default:
            return state;
    }
}

export default reducer;