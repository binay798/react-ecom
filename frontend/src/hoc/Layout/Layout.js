import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import classes from './Layout.module.scss';
import { top } from '../../assets/images';
import * as actionCreator from './../../store/actions/auth';
import { connect } from 'react-redux'
import SideDrawer from '../../components/UI/SideDrawer/SideDrawer';
import Notification from '../../components/Notification/Notification';

const moveToTop = () => {
    
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}



function Layout(props) {
    const [showSideDrawer,setShowSideDrawer] = React.useState(false)
    return (
        <div className={classes.layout}>
            <Notification show={props.notification.status} />
            <Navbar showSideDrawer={showSideDrawer} toggle={() => setShowSideDrawer(!showSideDrawer)} />
            <SideDrawer show={showSideDrawer} hide={() => setShowSideDrawer(false)} />
            {props.children}
            <Footer />
            <div className={classes.toTop} onClick={moveToTop}>
                <img src={top} alt="Up arrow"/>
            </div>
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
        setUser: (user) => dispatch(actionCreator.getUser(user))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Layout);
