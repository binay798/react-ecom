import React from 'react';
import classes from './Homepage.module.scss';
import Categories from '../../components/Categories/Categories';
import Product from '../../components/Product/Product';
import { db } from '../../firebase';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/index';
import Skeleton from '@material-ui/lab/Skeleton';
import Modal from '../../components/UI/Modal/Modal';





function Homepage(props) {

    const [loading,setLoading] = React.useState(false);
    
    // Get deals products from 'firebase
    React.useEffect(() => {
        let deals = db.collection('Deals')
            .orderBy('timestamp','desc')
            .get()
        let categories = db.collection('categories')
                            .get();
        Promise.all([deals,categories])
                .then(res => {
                    let responseData = {
                        deals: [],
                        categoriesList: [],
                    }

                    responseData.deals = res[0].docs.map( item => {
                        return {...item.data(),id:item.id}
                    })

                    responseData.categoriesList = res[1].docs.map( item => {
                        return {...item.data(),id:item.id}
                    })

                    
                    props.initialize(responseData)
                })
    },[])

    // Get random categories product from database
    React.useEffect(() => {
       
        // if(props.homepage.categoriesList.data !== null) {
        //     db.collection('categories')
        //         .doc(props.homepage.categoriesList.data[0].id)
        //         .collection('products')
        //         .limit(6)
        //         .get()
        //         .then(doc => {
        //             let data = doc.docs.map(item => {
        //                 return {...item.data(),id: item.id}
        //             })
                    
                    
        //         })
        //         .catch(err => console.log(err))
        // }
        
        
    },[])

    // Go to product details page ***From deals***
    const goToProductDetailsFromDeals = (productId) => {
        setLoading(true)
        db.collection('Deals')
            .doc(productId)
            .get()
            .then( res => {
                setLoading(false)
                props.storeSelectedProduct({...res.data(),id: res.id})
                props.history.push(`/productDetails/${res.id}`)
                
            })
            .catch(err => {
                console.log(err)
                setLoading(false)
            })
    }
    

    // Display all products of deals
    let showAllDeals = Array(6).fill().map(item => {
        return (
            <div>
                <Skeleton width="100%" height={200} animation="wave"  />
                <Skeleton width="50%" height={20} animation="wave" marginBottom="10px" />
                <Skeleton width="70%" height={20} animation="wave" marginBottom="10px" />
                <Skeleton width="60%" height={20} animation="wave" />

            </div>
        )
    })
    if(props.homepage.deals !== null) {
        showAllDeals = props.homepage.deals.map(item => {
        
            return (
                <Product 
                        key = {item.id}
                        imgUrl={item.imgUrl}
                        title={item.title}
                        discount={item.discount}
                        originalPrice={item.originalPrice}
                        id = {item.id}
                        type = 'deals'
                        clicked = {() => goToProductDetailsFromDeals(item.id)}
                    />
            )
        })
    }
    


    
    

    // Show random products
    // let displayRandomProducts = (<p>Loading...</p>)
    // if(props.homepage.randomProducts.data !== null) {
    //     displayRandomProducts = Array(6).fill().map(item => {
    //         return (
    //             <Product 
    //                 key = {item.id}
    //                 imgUrl={item.imgUrl}
    //                 title={item.title}
    //                 discount={item.discount}
    //                 originalPrice={item.originalPrice}
    //                 id = {item.id}
    //                 type = 'random'
    //             />
    //         )
    //     })
    // }
    return (
        <div className={classes.homepage}>
            <Modal show = {loading} >Fetching data...</Modal>
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

                    {showAllDeals}

                </div>
            
                
            </div>

            {/* New Arrivals */}
            <div className={classes.homepage__newArrivals}>
                <h2 className={classes.homepage__newArrivals__heading}>New Arrivals</h2>

                {/* <div className={classes.homepage__newArrivals__container}>
                    <Product 
                        imgUrl='https://www.newtimes.co.rw/sites/default/files/styles/mystyle/public/main/articles/2018/10/16/guitar.png' 
                        title='Guitar'
                        discount='30000'
                        originalPrice='35000'
                    />
                    <Product 
                        imgUrl='https://www.hailunpiano.eu/sites/default/files/styles/large/public/pianos/Grand%20218%20LineUp%20v2.png?itok=HsP1ah8t' 
                        title='Piano'
                        discount='1400000'
                        originalPrice='1500000'
                    />
                    <Product 
                        imgUrl='https://www.bell.ca/Styles/wireless/all_languages/all_regions/catalog_images/large/iPhone_11_Pro_Midnight_Green_lrg1.png' 
                        title='Iphone 11'
                        discount='75000'
                        originalPrice='100000'
                    />
                    <Product 
                        imgUrl='https://i1.wp.com/freepngimages.com/wp-content/uploads/2014/06/adidas-world-cup-2014-football.png?fit=500%2C500' 
                        title='Football'
                        discount='15000'
                        originalPrice='20000'
                    />
                    <Product 
                        imgUrl='https://www.gmfleet.com/content/dam/fleet/na/us/english/vdc-collections/2019/chevy/cars/camaro/camaro/01-images/2019-gmf-chevrolet-camaro-jelly.png?imwidth=960' 
                        title='General motors fleet cars'
                        discount='4500000'
                        originalPrice='5000000'
                    />
                    <Product 
                        imgUrl='https://images.carandbike.com/bike-images/colors/tvs/scooty-pep-plus/tvs-scooty-pep-plus-revving-red.webp?v=1585825526' 
                        title='Scooter dajdlkfjejdaljelkjdfejalakd'
                        discount='50000'
                        originalPrice='250000'
                    />
                    <Product 
                        imgUrl='https://thegoodguys.sirv.com/products/50052807/50052807_555047.PNG?scale.height=505&scale.width=773&canvas.height=505&canvas.width=773&canvas.opacity=0&q=90' 
                        title='Cooker'
                        discount='5000'
                        originalPrice='6000'
                    />
                    <Product 
                        imgUrl='https://i.ontraport.com/164028.6eaa89ef1b63bab586648c511d9a4da8.PNG' 
                        title='Think and Grow Rich'
                        discount='750'
                        originalPrice='1000'
                    />
                    <Product 
                        imgUrl='https://images.carandbike.com/bike-images/colors/tvs/scooty-pep-plus/tvs-scooty-pep-plus-revving-red.webp?v=1585825526' 
                        title='Scooter dajdlkfjejdaljelkjdfejalakd'
                        discount='50000'
                        originalPrice='250000'
                    />
                    <Product 
                        imgUrl='https://images.carandbike.com/bike-images/colors/tvs/scooty-pep-plus/tvs-scooty-pep-plus-revving-red.webp?v=1585825526' 
                        title='Scooter dajdlkfjejdaljelkjdfejalakd'
                        discount='50000'
                        originalPrice='250000'
                    />
                    <Product 
                        imgUrl='https://images.carandbike.com/bike-images/colors/tvs/scooty-pep-plus/tvs-scooty-pep-plus-revving-red.webp?v=1585825526' 
                        title='Scooter dajdlkfjejdaljelkjdfejalakd'
                        discount='50000'
                        originalPrice='250000'
                    />
                    <Product 
                        imgUrl='https://images.carandbike.com/bike-images/colors/tvs/scooty-pep-plus/tvs-scooty-pep-plus-revving-red.webp?v=1585825526' 
                        title='Scooter dajdlkfjejdaljelkjdfejalakd'
                        discount='50000'
                        originalPrice='250000'
                    />
                </div> */}
            </div>

            {/* Video games accessories */}

            <div className={classes.homepage__videoGames}>
                <h2 className={classes.homepage__videoGames__heading}>Video Games Accessories</h2>

                <div className={classes.homepage__videoGames__container}>
                    {/* {displayRandomProducts} */}
                    
                    
                </div>
            </div>
            
            
        </div>
    )
}


const mapStateToProps = state => {
    return {
        homepage: state.homepage
    }
}


const mapDispatchToProps = dispatch => {
    return {
        initialize: (data) => dispatch(actionCreators.initialize(data)),
        storeSelectedProduct: (data) => dispatch(actionCreators.storeSelectedProduct(data))
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Homepage);


