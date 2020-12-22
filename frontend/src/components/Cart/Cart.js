import React from 'react'
import classes from './Cart.module.scss';
import CartItem from './CartItem/CartItem';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import axios from './../../axios/axiosInstance';
import { loadStripe } from '@stripe/stripe-js';
import { db } from '../../firebase'
const stripePromise = loadStripe('pk_test_51Hy9RGDQWXVoYkcXwDUP7svuqZQqizBXlGwuPrmUqXgkSFODwq1JjjNOKXkYnHwnP06EzkzCSYqF2tMeTlFO5AcN00oNKgYYJF')



function Cart(props) {
    const [productsInCart,setProductsInCart] = React.useState([]);
    const [loading,setLoading] = React.useState(false)
    const goToLogin = () => {
        console.log('login')
        props.history.push('/accounts/login')
    }
    let getGrandTotal = props.productsInCart.productsInCart
        .map(product => {
            return product.totalPrice
        })
        .reduce((cur,next) => {
            return cur + next;
        },0)


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

    const checkout = async() => {
        setLoading(true)
        try {
            let products = productsInCart.map(product => {
                return {name: product.productTitle,
                        amount: product.price * 1,
                        quantity: product.count,
                        images: [product.imgUrl],
                        currency: 'usd'}
            })
            // add orders to firebase
            const userEmail = props.auth.user.email;
            console.log(userEmail)
            let usr = await db.collection('users').where("email","==",userEmail).get()
            usr.forEach((item) => {
                let userId = item.id
                console.log(userId)
                products.forEach(async(product) => {
                    console.log(product)
                    await db.collection('users').doc(userId).collection('orders').add(product)
                })
            })
            
            
            
            // stripe payment
            const stripe = await stripePromise;
            console.log(products)
            const res = await axios.post('/api/v1/payment/checkout-session',{products})
            console.log(res)
            setLoading(false)
            await stripe.redirectToCheckout({
                sessionId: res.data.session?.id
            })
            console.log(res)
        
        } catch(err) {
            console.log(err.message)
        }
        setLoading(false)
        // props.history.push('/')
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

                    <button disabled={loading} onClick={props.auth.user ? checkout : goToLogin}>{loading ? 'Processing...' : 'Checkout'}</button>
                </div>
            </div>
    )
}
const mapStateToProps = state => {
    return {
        productsInCart: state.cart,
        auth: state.auth
    }
}

export default connect(mapStateToProps)(withRouter(Cart));
