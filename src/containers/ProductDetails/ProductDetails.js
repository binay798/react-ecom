import classes from './ProductDetails.module.scss';
import React from 'react';  
import { star } from '../../assets/images'; 

const imgUrl = 'https://images.ctfassets.net/d6skzop43my5/6OyxwWln6Ke5UuX8hHLzZZ/5ae77b5f60dada8a8be63a0102ac7e45/nokia_5_3-front-cyan.png?q=50'
const imgUrl2 = 'https://img.xfinitymobile.com/image/upload/c_fit,f_auto,q_auto,fl_lossy/v1597347249/client/v2/images/lg-moto-100-promo/moto-100-promo-shop-banner-1280.png'
const imgUrl3 = 'https://www.lavamobiles.com/Product/z92/images/z92banner.png'



function ProductDetails() {

    const [childrenImages,setChildrenImages] = React.useState([
        {id:1,url:imgUrl},{id:2,url:imgUrl2},{id:3,url:imgUrl3},
    ])
    const [mainImage,setMainImage] = React.useState(childrenImages[0]);


    return (
        <div className={classes.productDetails}>
            <div className={classes.productDetails__container}>

                <div className={classes.productDetails__images}>
                    <div className={classes.productDetails__images__children}>
                        {/* <img className={classes.productDetails__images__active} src={imgUrl} alt="mobile"/>
                        <img src={imgUrl} alt="mobile"/>
                        <img src={imgUrl} alt="mobile"/> */}
                        {childrenImages.map(img => {
                            return (<img 
                                className={img.id === mainImage.id ? classes.productDetails__images__active : null} src={img.url} 
                                key={img.id} 
                                alt="mobile"
                                onClick={() => setMainImage(img)} />)
                        })}
                    
                    </div>
                    <div className={classes.productDetails__images__main}>
                        <img src={mainImage.url} alt="mobile"/>
                    </div>
                </div>
                <div className={classes.productDetails__desc}>
                    <h2>Samsung Galaxy A21s (4+64GB)</h2>
                    <p>Seller : <span>Samsung</span></p>
                    <p>
                        <span>Review : </span>
                        <img className={classes.productDetails__star} src={star} alt="star"/>
                        <img className={classes.productDetails__star} src={star} alt="star"/>
                        <img className={classes.productDetails__star} src={star} alt="star"/>
                        <img className={classes.productDetails__star} src={star} alt="star"/>
                        <img className={classes.productDetails__star} src={star} alt="star"/>
                        <span> (0)</span>
                    </p>

                    <h3>Specification</h3>
                    <ul>
                        <li>Brand: Samsung</li>
                        <li>Model: Galaxy A21s</li>
                        <li>Dimensions : 75.3 x 163.7 x 8.9 mm</li>
                        <a href="/">View more</a>
                    </ul>

                    <h3>Color</h3>
                    <div className={classes.productDetails__colorType}>
                        <span>Black</span>
                        <span>Blue</span>
                    </div>

                    <h4 className={classes.productDetails__price}>Nrs 24,999</h4>
                </div>
            </div>
            
        </div>
    )
}

export default ProductDetails
