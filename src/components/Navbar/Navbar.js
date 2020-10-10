import React from 'react'
import classes from './Navbar.module.scss';
import { logo } from '../../assets/images';
import SearchIcon from '@material-ui/icons/Search';
import PersonOutlineRoundedIcon from '@material-ui/icons/PersonOutlineRounded';
import ShoppingCartRoundedIcon from '@material-ui/icons/ShoppingCartRounded';


function Navbar() {
    return (
        <div className={classes.navbar}>
            <a href="/" className={classes.navbar__logo}>
                <img src={logo} className={classes.navbar__logoImg} alt="Logo"/>
            </a>
            <div className={classes.navbar__search}>
                <input type="text" placeholder="Search products, brands and categories"/>
                <div>
                    <SearchIcon style={{width: '2.5rem',height: '2.5rem',fill:'#f7f7f7'}} />
                </div>
            </div>
            <div className={classes.navbar__nav}>
                <a href="/" className={classes.navbar__nav__link}>
                    <span>Hello,guest</span>
                    <span>
                        <PersonOutlineRoundedIcon  />
                        Accounts
                    </span>
                </a>

                <a href="/" className={classes.navbar__nav__link}>
                    Orders
                </a>

                <a href="/" className={classes.navbar__nav__link}>
                    <ShoppingCartRoundedIcon style={{width: "2.5rem",height: "2.5rem"}} />
                    <p className={classes.cartNum}><span>2</span></p>
                </a>
            </div>

        </div>
    )
}

export default Navbar
