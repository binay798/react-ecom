import React from 'react'
import classes from './Navbar.module.scss';
import { logo,cart,user,search,menu } from '../../assets/images';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { auth } from './../../firebase';
import * as actionCreator from './../../store/actions/index';


function Navbar(props) {
    let productCount = props.getProductCount.productsInCart.length;
    
    const logoutUser = async(e) => {
        e.preventDefault();
        try {
            let res = await auth.signOut();
            console.log(res)
            props.logout()
        } catch(err) {
            console.log(err)
        }
    }
    return (
        <div className={classes.navbar}>
            <Link to="/" className={classes.navbar__logo}>
                <img src={logo} className={classes.navbar__logoImg} alt="Logo"/>
            </Link>
            <div className={classes.navbar__search}>
                <input type="text" placeholder="Search products, brands and categories"/>
                <div>
                    {/* <SearchIcon style={{width: '2.5rem',height: '2.5rem',fill:'#f7f7f7'}} /> */}
                    <img src={search} style={{display:'block',width: '2.5rem',height: '2.5rem'}} alt=""/>
                </div>
            </div>
            <div className={classes.navbar__nav}>

                {props.auth.auth && 
                (<Link to="/" className={classes.navbar__nav__link}>
                    <span>Hello,{props.auth?.user.displayName}</span>
                    <span>
                        {/* <PersonOutlineRoundedIcon  /> */}
                        <img src={user} style={{display:'block',width: '2.5rem',height: '2.5rem'}} alt=""/>

                        Accounts
                    </span>
                </Link>)}

                {!props.auth.auth && <Link to="/accounts/login"  className={classes.navbar__nav__link} >Login</Link>}
                {props.auth.auth && (<span onClick={logoutUser} style={{cursor: 'pointer'}} className={classes.navbar__nav__link} >Logout</span>)}
                
                {/* if not authenticated then don't show */}
                {props.auth.auth && (<Link to="/" className={classes.navbar__nav__link}>
                    Orders
                </Link>)}
                

                <Link to="/cart" className={classes.navbar__nav__link}>
                    {/* <ShoppingCartRoundedIcon style={{width: "2.5rem",height: "2.5rem"}} /> */}
                        <img src={cart} style={{display:'block',width: '2.5rem',height: '2.5rem'}} alt=""/>

                    <p className={classes.cartNum}><span>{productCount}</span></p>
                </Link>
            </div>

            <img src={menu} onClick={props.toggle} alt="menu" className={classes.navbar__menu} />

        </div>
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

export default connect(mapStateToProps,mapDispatchToProps)(Navbar);
