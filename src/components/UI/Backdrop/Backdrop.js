import React from 'react'
import classes from './Backdrop.module.scss';


function Backdrop(props) {
    return (
        <div 
            onClick={props.clicked}
            className={classes.backdrop} 
            style={
                {
                    backgroundColor: props.show ? "white" : "transparent",
                    opacity: props.show ? "0.9" : "0",
                    visibility: props.show ? "visible" : "hidden"
                }
                }>
            
        </div>
    )
}

export default Backdrop
