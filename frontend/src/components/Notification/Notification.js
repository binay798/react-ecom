import React from 'react'
import classes from './Notification.module.scss';
import { connect } from 'react-redux';
import * as actionCreator from './../../store/actions/index';



function Notification(props) {
    const notificationStyle = {
        display: props.show ? 'flex' : 'none'
    }

    React.useEffect(() => {
        
        const timeOut = setTimeout(() => {
            props.hide()
        },4000)
        return () => {
            clearTimeout(timeOut)
        };
    },[props.notification.status])
    
    return (
        <div className={classes.notification} style={notificationStyle}>
            <span>{props.notification.content}</span>
            <span onClick={() => props.hide()}>close</span>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        notification: state.notification
    }
}
const mapDispatchToProps = dispatch => {
    return {
        hide: () => dispatch({type: 'HIDE_NOTIFICATION'})
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Notification);
