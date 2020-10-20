import React from 'react'
import classes from './Modal.module.scss';
import Backdrop from '../Backdrop/Backdrop';

function Modal(props) {
    return (
        <>
        <div 
            className={classes.modal} 
            style={
                {
                    backgroundColor: props.show ? "white" : "transparent",
                    opacity: props.show ? "1" : "0",
                    visibility: props.show ? "visible" : "hidden",
                    color: "#0C4E6E"
                }
            }>
            {props.children}
        </div>
        <Backdrop show = {props.show} />
        </>
    )
}

export default Modal
