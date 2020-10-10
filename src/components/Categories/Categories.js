import React from 'react'
import classes from  './Categories.module.scss';
import Category from './Category/Category';
import {furniture,tv,book, menFashion, kitchen, sport, toys, woman} from '../../assets/images';

function Categories() {
    return (
        <div className={classes.categories}>
            <ul className={classes.categories__list}> 
                <Category icon={tv} content="TV,Appliances" />
                <Category icon={furniture} content="Furniture,home and offices" />
                <Category icon={kitchen} content="Kitchen Appliances" />
                <Category icon={menFashion} content="Men's Fashion" />
                <Category icon={woman} content="Woman's Fashion" />
                <Category icon={toys} content="Toys and Kids" />
                <Category icon={sport} content="Sports and Fitness" />
                <Category icon={book} content="Books,Musics" />
                <Category icon={tv} content="Health,Care" />


            </ul>
        </div>
    )
}

export default Categories
