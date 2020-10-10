import React from 'react';
import classes from './Homepage.module.scss';
import Categories from '../../components/Categories/Categories';
import Product from '../../components/Product/Product';
function Homepage() {

    
    

    return (
        <div className={classes.homepage}>
            <div className={classes.homepage__main}>
                <Categories />
                <img 
                    
                    src="https://i.ytimg.com/vi/dSCSBrOwYTQ/maxresdefault.jpg" 
                    alt="groceries"/>
            </div>

            <div className={classes.homepage__deals}>
                <div className={classes.homepage__deals__head}>
                    <h2 className={classes.homepage__deals__heading}>Today's top Deals</h2>
                    <p>Ends in  01:20:30s (started 7 oct)</p>
                </div>

                {/* Top deals */}
                <div className={classes.homepage__deals__container}>
                    <Product 
                        imgUrl='https://images.carandbike.com/bike-images/colors/tvs/scooty-pep-plus/tvs-scooty-pep-plus-revving-red.webp?v=1585825526' 
                        title='Scooter dajdlkfjejdaljelkjdfejalakd'
                        discountPrice='50000'
                        originalPrice='250000'
                    />
                    <Product
                    imgUrl='https://bsa.in/wp-content/uploads/sites/2/2018/06/BSA_Kids_Cybot_Green_2019_04.png'
                    title='Bicycle'
                    discountPrice='20000'
                    originalPrice='250000'
                    
                    />
                    <Product
                    imgUrl='https://www.bajajautofinance.com/uploads/vehicles/pho-bike-90-re.png'
                    title='Bike'
                    discountPrice='200000'
                    originalPrice='2500000'
                    
                    />
                    <Product
                    imgUrl='https://crdms.images.consumerreports.org/c_lfill,w_720,q_auto,f_auto/prod/cars/cr/model-years/11213-2022-tesla-cybertruck'
                    title='Cyber Truck'
                    discountPrice='50000'
                    originalPrice='250000'
                    
                    />
                    <Product
                    imgUrl='https://images.carandbike.com/bike-images/colors/tvs/scooty-pep-plus/tvs-scooty-pep-plus-revving-red.webp?v=1585825526'
                    title='Scooter'
                    discountPrice='100000'
                    originalPrice='2000000'
                    
                    />
                    <Product
                    imgUrl='https://images.carandbike.com/bike-images/colors/tvs/scooty-pep-plus/tvs-scooty-pep-plus-revving-red.webp?v=1585825526'
                    title='Scooter'
                    discountPrice='50000'
                    originalPrice='25000'
                    
                    />

                </div>
            
                
            </div>

            {/* New Arrivals */}
            <div className={classes.homepage__newArrivals}>
                <h2 className={classes.homepage__newArrivals__heading}>New Arrivals</h2>

                <div className={classes.homepage__newArrivals__container}>
                    <Product 
                        imgUrl='https://www.newtimes.co.rw/sites/default/files/styles/mystyle/public/main/articles/2018/10/16/guitar.png' 
                        title='Guitar'
                        discountPrice='30000'
                        originalPrice='35000'
                    />
                    <Product 
                        imgUrl='https://www.hailunpiano.eu/sites/default/files/styles/large/public/pianos/Grand%20218%20LineUp%20v2.png?itok=HsP1ah8t' 
                        title='Piano'
                        discountPrice='1400000'
                        originalPrice='1500000'
                    />
                    <Product 
                        imgUrl='https://www.bell.ca/Styles/wireless/all_languages/all_regions/catalog_images/large/iPhone_11_Pro_Midnight_Green_lrg1.png' 
                        title='Iphone 11'
                        discountPrice='75000'
                        originalPrice='100000'
                    />
                    <Product 
                        imgUrl='https://i1.wp.com/freepngimages.com/wp-content/uploads/2014/06/adidas-world-cup-2014-football.png?fit=500%2C500' 
                        title='Football'
                        discountPrice='15000'
                        originalPrice='20000'
                    />
                    <Product 
                        imgUrl='https://www.gmfleet.com/content/dam/fleet/na/us/english/vdc-collections/2019/chevy/cars/camaro/camaro/01-images/2019-gmf-chevrolet-camaro-jelly.png?imwidth=960' 
                        title='General motors fleet cars'
                        discountPrice='4500000'
                        originalPrice='5000000'
                    />
                    <Product 
                        imgUrl='https://images.carandbike.com/bike-images/colors/tvs/scooty-pep-plus/tvs-scooty-pep-plus-revving-red.webp?v=1585825526' 
                        title='Scooter dajdlkfjejdaljelkjdfejalakd'
                        discountPrice='50000'
                        originalPrice='250000'
                    />
                    <Product 
                        imgUrl='https://thegoodguys.sirv.com/products/50052807/50052807_555047.PNG?scale.height=505&scale.width=773&canvas.height=505&canvas.width=773&canvas.opacity=0&q=90' 
                        title='Cooker'
                        discountPrice='5000'
                        originalPrice='6000'
                    />
                    <Product 
                        imgUrl='https://i.ontraport.com/164028.6eaa89ef1b63bab586648c511d9a4da8.PNG' 
                        title='Think and Grow Rich'
                        discountPrice='750'
                        originalPrice='1000'
                    />
                    <Product 
                        imgUrl='https://images.carandbike.com/bike-images/colors/tvs/scooty-pep-plus/tvs-scooty-pep-plus-revving-red.webp?v=1585825526' 
                        title='Scooter dajdlkfjejdaljelkjdfejalakd'
                        discountPrice='50000'
                        originalPrice='250000'
                    />
                    <Product 
                        imgUrl='https://images.carandbike.com/bike-images/colors/tvs/scooty-pep-plus/tvs-scooty-pep-plus-revving-red.webp?v=1585825526' 
                        title='Scooter dajdlkfjejdaljelkjdfejalakd'
                        discountPrice='50000'
                        originalPrice='250000'
                    />
                    <Product 
                        imgUrl='https://images.carandbike.com/bike-images/colors/tvs/scooty-pep-plus/tvs-scooty-pep-plus-revving-red.webp?v=1585825526' 
                        title='Scooter dajdlkfjejdaljelkjdfejalakd'
                        discountPrice='50000'
                        originalPrice='250000'
                    />
                    <Product 
                        imgUrl='https://images.carandbike.com/bike-images/colors/tvs/scooty-pep-plus/tvs-scooty-pep-plus-revving-red.webp?v=1585825526' 
                        title='Scooter dajdlkfjejdaljelkjdfejalakd'
                        discountPrice='50000'
                        originalPrice='250000'
                    />
                </div>
            </div>

            {/* Video games accessories */}

            <div className={classes.homepage__videoGames}>
                <h2 className={classes.homepage__videoGames__heading}>Video Games Accessories</h2>

                <div className={classes.homepage__videoGames__container}>
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
                    
                    
                </div>
            </div>
            
            
        </div>
    )
}

export default Homepage;