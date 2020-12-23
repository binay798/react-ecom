import React from 'react'
import classes from './CartItem.module.scss';
import { plus,minus,trash,} from '../../../assets/images';
import { connect } from 'react-redux';
import * as actionCreators from '../../../store/actions/index';

function numberWithCommas(x) {
    
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    
    return parts.join(".");
}



function CartItem(props) {

    let currentItem = props.cart.productsInCart;
    currentItem = currentItem.filter(item => {
        return props.id === item.id
    })
    currentItem = currentItem[0]

    const increaseItem = () => {
        props.increase(currentItem.id)
        
    }

    const decreaseItem = () => {
        
        if(currentItem.count >=2) {
            props.decrease(currentItem.id)

        }
    }

    const deleteItem = () => {
        props.showNotification('Product removed')
        props.delete(currentItem.id)
    }

    
    return (
        <div className={classes.cart__container__products}>
            <div className={classes.cart__item}>
                <img src={props.imgUrl} alt=""/>
                <div className={classes.cart__item__details}>
                    <h2>Samsung Galaxy A21s (4+64GB)</h2>
                    <p>Color: black</p>
                    <button onClick={deleteItem}>
                        <img src={trash} alt="delete"/>
                    </button>
                </div>
            </div>
            <div className={classes.cart__unitPrice}>
                <span>NPR</span> {numberWithCommas(props.price)}
            </div>
            <div  className={classes.cart__quantity}>
                <span onClick={decreaseItem} ><img src={minus} alt="sub"/></span>
                <span>{currentItem.count}</span>
                <span onClick={increaseItem} ><img src={plus} alt="add"/></span>
            </div>
            <div  className={classes.cart__subTotal}>
                <span>NPR</span> {numberWithCommas(currentItem.totalPrice)}
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}

const mapDispatchToProps = dispatch => {
    return {
        increase: (id) => dispatch(actionCreators.increaseCartItem(id)),
        decrease: (id) => dispatch(actionCreators.decreaseCartItem(id)),
        delete: (id) => dispatch(actionCreators.deleteCartItem(id)),
        showNotification: (content) => dispatch(actionCreators.showNotification(content))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CartItem);
