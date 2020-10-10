import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import classes from './Layout.module.scss';
import { top } from '../../assets/images';

const moveToTop = () => {
    
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}



function Layout({children}) {
    return (
        <div>
            <Navbar />
            {children}
            <Footer />
            <div className={classes.toTop} onClick={moveToTop}>
                <img src={top} alt="Up arrow"/>
            </div>
        </div>
    )
}

export default Layout
