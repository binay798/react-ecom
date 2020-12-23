import React from 'react';
import { createStore,combineReducers } from 'redux';
import { Provider } from 'react-redux';
import homepageReducer from './reducers/Homepage';
import selectedProductReducer from './reducers/selectedProduct';
import cartReducer from './reducers/cart';
import authReducer from './reducers/auth';
import notificationReducer from './reducers/notification'

const rootReducer = combineReducers({
    homepage: homepageReducer,
    selectedProduct: selectedProductReducer,
    cart: cartReducer,
    auth: authReducer,
    notification: notificationReducer
})

const store = createStore(rootReducer)

const StateProvider = ({children}) => {
    return (
        <Provider store={store} >
            {children}
        </Provider>
    )
}
export default StateProvider;