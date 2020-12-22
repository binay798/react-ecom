import React from 'react'
import classes from './Reviews.module.scss';

function Reviews() {
    return (
        <div className={classes.reviews}>
            <p className={classes.reviews__container}>No reviews yet.</p>
            <div className={classes.reviews__write}>
                <p>Have you used this product?</p>
                <span>Share Your product view, delivery, Quality, service with test.com</span>
                <a href="/">Write a review</a>
            </div>
        </div>
    )
}

export default Reviews