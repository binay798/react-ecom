import React from 'react';
import classes from './Homepage.module.scss';
import Categories from '../../components/Categories/Categories';
import Product from '../../components/Product/Product';
import { db } from '../../firebase';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/index';
import Modal from '../../components/UI/Modal/Modal';
import CircularProgress from '@material-ui/core/CircularProgress';
import ShowSkeletonLoader from '../../components/ShowSkeletonLoader/ShowSkeletonLoader';
import {auth as userAuth} from './../../firebase'




function Homepage(props) {

    const [loading,setLoading] = React.useState(false);
    const { initialize, setUser } = props;

    React.useEffect(() => {
        let unsubscribe;
        const fetchData = async() => {
            unsubscribe = await userAuth.onAuthStateChanged(user => {
                if(user) {
                    
                    user = JSON.stringify(user);
                    user = JSON.parse(user)
                    setUser(user)
                } else {
                    console.log('no user logged in')
                }
            })
        }
        fetchData()
        
        return () => unsubscribe
    },[setUser])

    // Get deals products from 'firebase;
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

                    
                    initialize(responseData)
                })
    },[initialize])

    

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
    

    // Display all products of deals ---skeleton loader--- while fetching data from db
   
    let showAllDeals = <ShowSkeletonLoader />
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

    

    return (
        <div className={classes.homepage}>
            <Modal show = {loading} >
                <CircularProgress  />
            </Modal>
            <div className={classes.homepage__main}>
                <Categories />

                {/* Must be a Carousal */}
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

            
            
            
        </div>
    )
}


const mapStateToProps = state => {
    return {
        homepage: state.homepage,
        auth: state.auth
    }
}


const mapDispatchToProps = dispatch => {
    return {
        initialize: (data) => dispatch(actionCreators.initialize(data)),
        storeSelectedProduct: (data) => dispatch(actionCreators.storeSelectedProduct(data)),
        setUser: (user) => dispatch(actionCreators.getUser(user))
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Homepage);


