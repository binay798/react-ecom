import React from 'react'
import classes from './Cart.module.scss';
import CartItem from './CartItem/CartItem';
import { connect } from 'react-redux'




function Cart(props) {
    let getGrandTotal = props.productsInCart.productsInCart
        .map(product => {
            return product.totalPrice
        })
        .reduce((cur,next) => {
            return cur + next;
        },0)

    const [productsInCart,setProductsInCart] = React.useState([]);

    React.useEffect(() => {
        window.scrollTo(0,0);
        let allProducts = props.productsInCart.productsInCart;

        setProductsInCart([...allProducts])
    },[props.productsInCart])

    let displayProducts = (<h2>Cart is Empty</h2>)
    if(productsInCart.length !== 0) {
        displayProducts = productsInCart.map(item => {
            return (<CartItem 
                    key = {item.id}
                    imgUrl={item.imgUrl} 
                    price={item.price} 
                    title={item.productTitle} 
                    totalPrice={item.totalPrice}
                    id = {item.id}
                    count = {item.count} />)
        })
        displayProducts = displayProducts.reverse()
    }
    return (
        <div className={classes.cart__container}>
                <div className={classes.cart__container__title}>
                    <div>ITEM</div>
                    <div>UNIT PRICE</div>
                    <div>QUANTITY</div>
                    <div>SUB TOTAL</div>
                </div>

                {displayProducts}

                <div className={classes.cart__container__total}>
                    <h2>Total: {getGrandTotal}</h2>
                    <button>Checkout</button>
                </div>
            </div>
    )
}
const mapStateToProps = state => {
    return {
        productsInCart: state.cart
    }
}

export default connect(mapStateToProps)(Cart);
