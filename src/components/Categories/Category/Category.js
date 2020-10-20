import React from 'react';
import classes from './Category.module.scss';
import { withRouter } from 'react-router-dom';


function Category(props) {
    
    

    const changeLink = () => {
        
        props.history.push(`/categorieResult/${props.id}`)
    }
    
    
    return (
        <li className={classes.category}>
            <div onClick={changeLink} className={classes.category__link}>
                
            <img className={classes.category__img} src={props.icon} alt="icon"/>
            <p className={classes.category__text}>{props.content}</p>
            </div>
        </li>
    )
}

export default withRouter(Category);