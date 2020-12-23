import * as actionTypes from './../actions/actions'

const initialState = {
    status: false,
    content: null
}
const reducer = (state = initialState,action) => {
    switch(action.type) {
        case actionTypes.SHOW_NOTIFICATION:
            return {
                ...state,
                status: true,
                content: action.payload
            }
        case actionTypes.HIDE_NOTIFICATION:
            return {
                status: false,
                content: null
            }
        default:
            return state;
    }
}

export default reducer;