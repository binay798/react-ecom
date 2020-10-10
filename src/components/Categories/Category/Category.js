import React from 'react';
import classes from './Category.module.scss';

function Category(props) {
    
    return (
        <li className={classes.category}>
            <a href="/" className={classes.category__link}>
            <img className={classes.category__img} src={props.icon} alt="icon"/>
            <p className={classes.category__text}>{props.content}</p>
            </a>
        </li>
    )
}

export default Category;