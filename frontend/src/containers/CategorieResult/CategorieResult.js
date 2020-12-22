import React from 'react'
import classes from './CategorieResult.module.scss';
import Product from '../../components/Product/Product';
import { db } from '../../firebase';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/index';
import { withRouter } from 'react-router-dom';
import Skeleton from '@material-ui/lab/Skeleton';
import Modal from '../../components/UI/Modal/Modal';
import { CircularProgress } from '@material-ui/core';


function CategorieResult(props) {

    const [loading,setLoading] = React.useState(false)
    
    let categoryId = props.match.params.id;
    const [title,setTitle] = React.useState(<Skeleton animation="wave" width={250} height={50} />);
    const [products,setProducts] = React.useState(null);
    
    React.useEffect(() => {
        let categoryProducts = db.collection('categories')
            .doc(categoryId)
            .collection('products')
            .get()
        let categoryTitle = db.collection('categories')
            .doc(categoryId)
            .get()
        Promise.all([categoryProducts,categoryTitle])
                .then(res => {
                    categoryProducts = res[0].docs.map(item => {
                        return {...item.data(),id: item.id}
                    })
                    categoryTitle = res[1].data()
                    setTitle(categoryTitle.title)
                    setProducts([...categoryProducts])
                })
                .catch(err => {
                    console.log(err)
                })
    },[categoryId])

    const goToProductDetailsPage = (productId) => {
        setLoading(true);
        db.collection('categories')
            .doc(categoryId)
            .collection('products')
            .doc(productId)
            .get()
            .then(res => {
                
                setLoading(false);
                
                let productInfo = {...res.data(),id: res.id};
                
                props.storeSelectedProduct(productInfo)
                props.history.push(`/productDetails/${productId}`);
                
            })
            .catch(err => {
                console.log(err);
                setLoading(false);

            })
    }

    // show skeleton loader while fetching data from firebase
    let displayproducts = Array(6).fill().map((item,id) => {
        return (
            <div key={id}>
                <Skeleton width="100%" height={200} animation="wave"  />
                <Skeleton width="50%" height={20} animation="wave" style={{marginBottom: "10px"}} />
                <Skeleton width="70%" height={20} animation="wave" style={{marginBottom: "10px"}} />
                <Skeleton width="60%" height={20} animation="wave" />

            </div>
        )
    })
    if(products !== null) {
        displayproducts = products.map(item => {
            return (
                <Product key={item.id}
                    imgUrl= {item.imgUrl}
                    title={item.title}
                    discount={item.discount}
                    originalPrice={item.originalPrice}
                    id = {item.id}
                    
                    clicked={() => goToProductDetailsPage(item.id)}
                />
            )
        })
    }


    
    return (
        <div className={classes.categorie}>
            <Modal show={loading} >
                <CircularProgress  />
            </Modal>
            <div className={classes.left}>
                <div className={classes.left__child}>
                    <h2>Filter By</h2>

                    <form action="">
                        <div>
                            <input type="radio" name='price' id={classes.lowToHigh} />
                            <label htmlFor={`#${classes.lowToHigh}`}>Price from low to high</label>
                        </div>
                        <div>
                            <input type="radio" name='price' id={classes.highToLow} />
                            <label htmlFor={`#${classes.highToLow}`}>Price from high to low</label>
                        </div>
                    </form>
                </div>
            </div>
            <div className={classes.right}>
                <h2 className={classes.right__heading}>{title}</h2>

                <div className={classes.right__container}>
                    
                {displayproducts}
                    
                    
                </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        storeSelectedProduct: (data) => dispatch(actionCreators.storeSelectedProduct(data))
    }
}

export default connect(null,mapDispatchToProps)(withRouter(CategorieResult));
