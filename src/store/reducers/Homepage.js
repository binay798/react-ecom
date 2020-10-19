import * as actionTypes from '../actions/actions';
import { getNewState } from '../utility';

const initialState = {
    deals:null,
    randomCategoryProducts:null,
    categoriesList: null
}

const reducer = (state = initialState,action) => {
    switch(action.type) {
        case actionTypes.INITIALIZE:
            
            let newState = getNewState(state);

            return {
                ...newState,
                deals: action.payload.data.deals,
                categoriesList: action.payload.data.categoriesList
            };
        default:
            return state;
    }
}

export default reducer;