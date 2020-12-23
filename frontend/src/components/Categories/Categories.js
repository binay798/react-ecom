import React from 'react'
import classes from  './Categories.module.scss';
import Category from './Category/Category';
import { connect } from 'react-redux';
import Skeleton from '@material-ui/lab/Skeleton';

function Categories(props) {

      

    let displayCategories = Array(1).fill().map((item,id) => {
        return <Skeleton key={id} animation="wave" variant="rect" width="100%" height={300} style={{marginBottom: "2px"}}  />
    })
    // Categories from redux
    if(props.categories !== null) {
        displayCategories = props.categories.map(item => {
            return <Category id={item.id} icon={item.icon} content={item.title} key={item.id} />
        })
    }
    return (
        <div className={classes.categories}>
            <ul className={classes.categories__list}> 
                
                {displayCategories}

            </ul>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        categories: state.homepage.categoriesList
    }
}


export default connect(mapStateToProps)(Categories);
