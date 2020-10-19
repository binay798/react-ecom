import React from 'react'
import classes from  './Categories.module.scss';
import Category from './Category/Category';
import { connect } from 'react-redux';

function Categories(props) {

    

    let displayCategories = (<p>Fetching data...</p>);
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

// const mapDispatchToProps = dispatch => {
//     return {
//         getCategories: (data) => dispatch(actionCreators.getCategoriesList(data))
//     }
// }

export default connect(mapStateToProps)(Categories);
