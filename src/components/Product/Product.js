import React from 'react'
import classes from './Product.module.scss';
// import { withRouter } from 'react-router-dom';
// import { connect } from 'react-redux';
// import * as actionCreators from '../../store/actions/selectedProduct';

const titleShortner = (title) => {
   
    if(title.length > 20) {
        return `${title.slice(0,20)}...`
    }else {
        return title;
    }

}

function numberWithCommas(x) {
    
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    
    return parts.join(".");
}

function percentCalc(original,discount) {
    let final = ((discount)/original) * 100;
    return Math.floor(final);
}



function Product(props) {
    
    
    
    return (
        <div className={classes.product} onClick={props.clicked}>
            {/* product image */}
            <div className={classes.product__img}>
                <img 
                    src={props.imgUrl}
                    alt=""/>
            </div>
            {/* product title */}
            <h3 className={classes.product__title}>
                {titleShortner(props.title)}
            </h3>
            {/* product price */}
            <div className={classes.product__price}>
                NPR { numberWithCommas(props.originalPrice - props.discount)}
            </div>
            {/* product discount */}
            <div className={classes.product__discount}>
                <span>{props.originalPrice}</span>
                <span>{percentCalc(props.originalPrice,props.discount)}% off</span>
            </div>
        </div>
    )
}

// const mapDispatchToProps = dispatch => {
//     return {
//         getSelected: (type,category,productId) => dispatch(actionCreators.getSelectedProduct(type,category,productId))
//     }
// }

export default Product;
