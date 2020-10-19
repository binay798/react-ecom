import classes from './ProductDetails.module.scss';
import React from 'react';  
import { star } from '../../assets/images'; 
import ReactImageMagnify from 'react-image-magnify';
import Reviews from '../../components/Reviews/Reviews';
import Specification from '../../components/Specification/Specification';
import Product from '../../components/Product/Product';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import * as actionCreators from '../../store/actions/index';

const imgUrl = 'https://images.ctfassets.net/d6skzop43my5/6OyxwWln6Ke5UuX8hHLzZZ/5ae77b5f60dada8a8be63a0102ac7e45/nokia_5_3-front-cyan.png?q=50'
const imgUrl2 = 'https://img.xfinitymobile.com/image/upload/c_fit,f_auto,q_auto,fl_lossy/v1597347249/client/v2/images/lg-moto-100-promo/moto-100-promo-shop-banner-1280.png'
const imgUrl3 = 'https://www.lavamobiles.com/Product/z92/images/z92banner.png'



function ProductDetails(props) {
    // All images
    const [childrenImages,setChildrenImages] = React.useState([
        {id:1,url:imgUrl},{id:2,url:imgUrl2},{id:3,url:imgUrl3},
    ])
    // Selected image is shown 
    const [mainImage,setMainImage] = React.useState(childrenImages[0]);
    // Selected specification or reviews option
    const [specification,setSpecification] = React.useState(true);

    const [detail,setDetail] = React.useState({
        title: null,
        discount: null,
        originalPrice: null
    })
  
    let productId = props.match.params.id;
    
    React.useEffect(() => {
        window.scrollTo(0,0);
        if(props.selectedProduct !== null) {
            setMainImage({id: 1, url: props.selectedProduct.imgUrl})

        }else {
            props.history.push('/')
        }
    },[])

    
    
    const goToCart = () => {
        let productTitle = props.selectedProduct.title;
        let price = props.selectedProduct.originalPrice - props.selectedProduct.discount;
        let count = 1;
        let totalPrice = price;
        let imgUrl = props.selectedProduct.imgUrl
        let id = props.selectedProduct.id
        let data = {productTitle,price,count,totalPrice,imgUrl,id}
        props.addToCart(data);
    }
    

    return (
        <div className={classes.productDetails}>


            <div className={classes.productDetails__container}>
                
                <div className={classes.productDetails__images}>
                    
                    <div className={classes.productDetails__images__main}>
                        {/* <img src={mainImage.url} alt="mobile"/> */}



                        <ReactImageMagnify {...{
                            smallImage: {
                                alt: 'Wristwatch by Ted Baker London',
                                isFluidWidth: true,
                                src: mainImage.url
                            },
                            largeImage: {
                                src: mainImage.url,
                                width: 1200,
                                height: 1800,
                            },
                            enlargedImageContainerDimensions: {
                                width: '100%',
                                height: '130%',
                                enlargedImageContainerClassName: classes.enlarged,
                                backgroundColor: 'red'
                            },
                            shouldUsePositiveSpaceLens: true
                        }} />





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
                        <a href={classes.productDetails__spec}>View more</a>
                    </ul>

                    <h3>Color</h3>
                    <div className={classes.productDetails__colorType}>
                        <span>Black</span>
                        <span>Blue</span>
                    </div>
                    <div className={classes.productDetails__quantity}>
                        <h4 className={classes.productDetails__price}>Nrs 24,999</h4>

                    </div>

                    <div className={classes.productDetails__buttons}>
                        <Link to="/cart" onClick={goToCart} className={classes.productDetails__buttons__cart}>Add To Cart</Link>
                        <Link to="/cart" className={classes.productDetails__buttons__buy}>Buy Now</Link>
                    </div>


                    
                </div>
            </div>



            
            
            <div className={classes.productDetails__spec}>
                <div className={classes.toggler}>
                        <p className={specification ? classes.toggler__active : null} onClick={() => setSpecification(true)}>Specification</p>
                        <p className={!specification ? classes.toggler__active : null}  onClick={() => setSpecification(false)}>Reviews</p>
                </div>
                <div className={classes.toggler__content}>
                    {specification ? <Specification /> : <Reviews />}
                </div>
                
            </div>

            <div className={classes.productDetails__videoGames}>
                <h2 className={classes.productDetails__videoGames__heading}>You may also like</h2>

                <div className={classes.productDetails__videoGames__container}>
                    <Product 
                        imgUrl={imgUrl2} 
                        title='Joystick'
                        discountPrice='15000'
                        originalPrice='18000'
                    />
                    
                    <Product 
                        imgUrl={imgUrl} 
                        title='Joystick'
                        discountPrice='15000'
                        originalPrice='18000'
                    />
                    <Product 
                        imgUrl={imgUrl3}
                        title='Joystick'
                        discountPrice='15000'
                        originalPrice='18000'
                    />
                    <Product 
                    imgUrl='https://cdn.shopify.com/s/files/1/2459/1583/products/Game-pad_2000x_crop_center.png?v=1593670675' 
                    title='Joystick'
                    discountPrice='15000'
                    originalPrice='18000'
                    />
                    <Product 
                        imgUrl='https://cdn.shopify.com/s/files/1/2459/1583/products/Game-pad_2000x_crop_center.png?v=1593670675' 
                        title='Joystick'
                        discountPrice='15000'
                        originalPrice='18000'
                    />
                    <Product 
                        imgUrl={imgUrl}
                        title='Joystick'
                        discountPrice='15000'
                        originalPrice='18000'
                    />
                    
                    
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        selectedProduct: state.selectedProduct.selectedProduct,
        
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addToCart: (data) => dispatch(actionCreators.addProductToCart(data))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProductDetails);
