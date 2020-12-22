import React from 'react'
import Login from '../../components/Login/Login';
import Signup from '../../components/Signup/Signup'
import classes from './Auth.module.scss';
import { Switch, Route } from 'react-router-dom'
function Auth() {
    return (
        <div className={classes.auth}>
            <Switch>
                <Route path='/accounts/login' component={Login} />
                <Route path='/accounts/signup' component={Signup} />

            </Switch>
        </div>
    )
}

export default Auth
