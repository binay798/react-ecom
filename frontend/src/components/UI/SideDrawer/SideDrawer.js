import React from 'react'
import classes from './SideDrawer.module.scss';
import Backdrop from './../Backdrop/Backdrop';
import { logo,user, cart } from './../../../assets/images';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { auth } from './../../../firebase'
import * as actionCreator from './../../../store/actions/auth';

function SideDrawer(props) {
    let productCount = props.getProductCount.productsInCart.length;

    const sideDrawerStyle = {
        transform: `translateX(${props.show ? '0%' : '-110%'})`
    }
    const logoutUser = async(e) => {
        e.preventDefault();
        try {
            let res = await auth.signOut();
            console.log(res)
            props.logout()
            props.hide()
        } catch(err) {
            console.log(err)
        }
    }

    const hideSideDrawer = () => {
        console.log('clicked')
        props.hide()
    }
    return (
        <>
            <div className={classes.side} style={sideDrawerStyle}>
                <Link to='/' onClick={hideSideDrawer}>
                    <img src={logo} alt="logo"/>
                </Link>

                <div className={classes.side__nav}>

                {props.auth.auth && 
                (<Link to="/" className={classes.side__nav__link} onClick={hideSideDrawer}>
                    <span>Hello,{props.auth?.user.displayName}</span>
                    <span>
                        {/* <PersonOutlineRoundedIcon  /> */}
                        <img src={user} style={{display:'block',width: '2.5rem',height: '2.5rem'}} alt=""/>

                        Accounts
                    </span>
                </Link>)}

                {!props.auth.auth && <Link onClick={logoutUser} to="/accounts/login"  className={classes.side__nav__link} >Login</Link>}
                {props.auth.auth && (<span onClick={logoutUser} style={{cursor: 'pointer'}} className={classes.side__nav__link} >Logout</span>)}
                
                {/* if not authenticated then don't show */}
                {props.auth.auth && (<Link to="/" onClick={hideSideDrawer} className={classes.side__nav__link}>
                    Orders
                </Link>)}
                

                <Link to="/cart" className={classes.side__nav__link} onClick={hideSideDrawer}>
                    {/* <ShoppingCartRoundedIcon style={{width: "2.5rem",height: "2.5rem"}} /> */}
                        <img src={cart} style={{display:'block',width: '2.5rem',height: '2.5rem'}} alt=""/>

                    <p className={classes.cartNum}><span>{productCount}</span></p>
                </Link>
            </div>
            </div>
            <Backdrop show={props.show} clicked={props.hide} />
        </>
    )
}

const mapStateToProps = state => {
    return {
        getProductCount: state.cart,
        auth: state.auth
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(actionCreator.logout())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SideDrawer)
