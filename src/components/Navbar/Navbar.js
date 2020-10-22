import React from 'react'
import classes from './Navbar.module.scss';
import { logo,cart,user,search, } from '../../assets/images';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'


function Navbar(props) {
    let productCount = props.getProductCount.productsInCart.length;
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
                <a href="/" className={classes.navbar__nav__link}>
                    <span>Hello,guest</span>
                    <span>
                        {/* <PersonOutlineRoundedIcon  /> */}
                        <img src={user} style={{display:'block',width: '2.5rem',height: '2.5rem'}} alt=""/>

                        Accounts
                    </span>
                </a>

                <a href="/" className={classes.navbar__nav__link}>
                    Orders
                </a>

                <Link to="/cart" className={classes.navbar__nav__link}>
                    {/* <ShoppingCartRoundedIcon style={{width: "2.5rem",height: "2.5rem"}} /> */}
                        <img src={cart} style={{display:'block',width: '2.5rem',height: '2.5rem'}} alt=""/>

                    <p className={classes.cartNum}><span>{productCount}</span></p>
                </Link>
            </div>

        </div>
    )
}

const mapStateToProps = state => {
    return {
        getProductCount: state.cart
    }
}

export default connect(mapStateToProps)(Navbar);
