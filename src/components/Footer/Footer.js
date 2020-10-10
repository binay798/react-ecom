import React from 'react'
import classes from './Footer.module.scss';
import { secure,
        fastDelivery,
        returnBox,bestSeller,
        logo,fb,ins,lin,envelope,location,phone, googlePlay,appleStore,
} from '../../assets/images';

function Footer() {
    return (
        <div className={classes.footer}>
            <div className={classes.footer__top}>
                <div>
                    {/* Svg */}
                    <img src={fastDelivery} alt="fast delivery"/>
                    {/* heading */}
                    <h2>Express Delivery</h2>

                    {/* paragraph */}
                    <p>Express Delivery on orders over the country</p>

                </div>
                <div>
                    {/* Svg */}
                    <img src={secure} alt="fast delivery"/>
                    {/* heading */}
                    <h2>Secure Shopping</h2>

                    {/* paragraph */}
                    <p>We are committed to protecting the security of your information</p>

                </div>
                <div>
                    {/* Svg */}
                    <img src={returnBox} alt="fast delivery"/>
                    {/* heading */}
                    <h2>Easy Returns</h2>

                    {/* paragraph */}
                    <p>Easy returns on our products, Returns are free and easy!</p>

                </div>
                <div>
                    {/* Svg */}
                    <img src={bestSeller} alt="fast delivery"/>
                    {/* heading */}
                    <h2>Quality Checked</h2>

                    {/* paragraph */}
                    <p>We are providing top quality products and service.</p>

                </div>
            </div>

            <div className={classes.footer__bottom}>
                {/* Logo */}
                <div className={classes.footer__bottom__logo}>
                    <img src={logo} alt="Logo"/>
                </div>
                {/* contact us */}
                <div className={classes.footer__bottom__contact}>
                    <h2>Contact Us</h2>

                    {/* Address */}
                    <div className={classes.footer__address}>
                        <img src={location} alt="Location"/>
                        <p><span>Address:</span> Samakhushi Ranibari Road, Kathmandu, Nepal</p>
                    </div>

                    {/* phone number */}
                    <div className={classes.footer__phone}>
                        <img src={phone} alt="Location"/>
                        <p><span>Phone:</span> +977 1 436551 (Support)</p>
                    </div>
                    {/* Email */}
                    <div className={classes.footer__email}>
                        <img src={envelope} alt="Location"/>
                        <p><span>Email:</span> test@gmail.com</p>
                    </div>
                    {/* Social links */}
                    <div className={classes.footer__social}>

                    </div>
                </div>
                {/* Mobile app */}
                <div className={classes.footer__bottom__mobile}>
                    <h2>Mobile App</h2>
                    <a href="/"><img src={googlePlay} alt="Google play"/></a>
                    <a href="/"><img src={appleStore} alt="App Store"/></a>

                </div>
                
            </div>
            <div className={classes.footer__copyright}>
                <span>© 2020 Shopee Pvt.Ltd. All Rights Reserved</span>
            </div>
        </div>
    )
}

export default Footer
