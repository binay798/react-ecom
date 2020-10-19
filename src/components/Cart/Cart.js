import React from 'react'
import classes from './Cart.module.scss';
import CartItem from './CartItem/CartItem';
import { connect } from 'react-redux'


const imgUrl3 = 'https://www.lavamobiles.com/Product/z92/images/z92banner.png';
const imgUrl2 = 'https://img.xfinitymobile.com/image/upload/c_fit,f_auto,q_auto,fl_lossy/v1597347249/client/v2/images/lg-moto-100-promo/moto-100-promo-shop-banner-1280.png'



function Cart(props) {

    const [productsInCart,setProductsInCart] = React.useState([]);

    React.useEffect(() => {
        window.scrollTo(0,0);
        let allProducts = props.productsInCart.productsInCart;

        setProductsInCart([...allProducts])
    },[])

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
                    <h2>Total: 12,000</h2>
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
