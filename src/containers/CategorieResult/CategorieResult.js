import React from 'react'
import classes from './CategorieResult.module.scss';
import Product from '../../components/Product/Product';
import { db } from '../../firebase';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/index';
import { withRouter } from 'react-router-dom';


const img = 'https://images.carandbike.com/bike-images/colors/tvs/scooty-pep-plus/tvs-scooty-pep-plus-revving-red.webp?v=1585825526'
function CategorieResult(props) {
    
    let categoryId = props.match.params.id;
    const [title,setTitle] = React.useState('Fetching data...');
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
    },[])

    const goToProductDetailsPage = (productId) => {
        db.collection('categories')
            .doc(categoryId)
            .collection('products')
            .doc(productId)
            .get()
            .then(res => {
                
                let productInfo = {...res.data(),id: res.id};
                
                props.storeSelectedProduct(productInfo)
                props.history.push(`/productDetails/${productId}`);
                
            })
            .catch(err => console.log(err))
    }

    let displayproducts = (<p>Fetching data...</p>)
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
