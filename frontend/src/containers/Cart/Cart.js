import React from 'react'
import classes from './Cart.module.scss';
import CartComponent from '../../components/Cart/Cart';

function Cart(props) {

    return (
        <div className={classes.cart}>
            <h1 className={classes.cart__heading}>Shopping Cart</h1>
            <CartComponent />
            
        </div>
    )
}



export default Cart;
