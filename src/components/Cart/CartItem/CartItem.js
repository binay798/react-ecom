import React from 'react'
import classes from './CartItem.module.scss';
import { plus,minus,trash,} from '../../../assets/images';


function numberWithCommas(x) {
    
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    
    return parts.join(".");
}



function CartItem(props) {

    
    return (
        <div className={classes.cart__container__products}>
            <div className={classes.cart__item}>
                <img src={props.imgUrl} alt=""/>
                <div className={classes.cart__item__details}>
                    <h2>Samsung Galaxy A21s (4+64GB)</h2>
                    <p>Color: black</p>
                    <button>
                        <img src={trash} alt="delete"/>
                    </button>
                </div>
            </div>
            <div className={classes.cart__unitPrice}>
                <span>NPR</span> {numberWithCommas(props.price)}
            </div>
            <div  className={classes.cart__quantity}>
                <span ><img src={minus} alt="sub"/></span>
                <span>{props.count}</span>
                <span ><img src={plus} alt="add"/></span>
            </div>
            <div  className={classes.cart__subTotal}>
                <span>NPR</span> {numberWithCommas(props.totalPrice)}
            </div>
        </div>
    )
}

export default CartItem
