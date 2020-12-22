import * as actionTypes from './../actions/actions'

const initialState = {
    user: null,
    auth: false
}

const reducer = (state=initialState,action) => {
    switch(action.type) {
        case actionTypes.GET_USER:
            return {
                ...state,
                user: action.payload.user,
                auth: true
            }
        case actionTypes.LOGOUT:
            return {
                ...state,
                user:null,
                auth: false
            }
        default: 
            return state;
    }
}
export default reducer;