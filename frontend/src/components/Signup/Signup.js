import React from 'react'
import classes from './Signup.module.scss';
import {logo } from './../../assets/images';
import { auth, db } from './../../firebase';
import { connect } from 'react-redux';
import * as actionCreator from './../../store/actions/auth';
import { withRouter } from 'react-router-dom'

const clearInput = (setState) => {
    return setState({
                username: '',
                email: '',
                password: '',
                confirmPassword: ''
            })
}

function Signup(props) {
    const [state,setState] = React.useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    })
    const [loading,setLoading] = React.useState(false)

    const changeHandler = (e,type) => {
        setState({...state,[type]: e.target.value})
    }

    const submitHandler = async(e) => {
        e.preventDefault();
        setLoading(true)
        if(state.username !== '' && 
        state.email !== '' && 
        state.password !== '' && 
        state.confirmPassword !== '') {

            if(state.password === state.confirmPassword) {
                try {
                    let user = await auth.createUserWithEmailAndPassword(state.email,state.password)
                    
                    
                    // update user
                    await user.user.updateProfile({
                        displayName: state.username
                    })
                    user = JSON.parse(JSON.stringify(user));
                    await db.collection('users').add({
                        username: user.user.displayName,
                        email: user.user.email
                    })
                    
                    
                    
                    user = JSON.stringify(user)
                    user = JSON.parse(user)
                    console.log(user)
                    props.setUser(user.user)
                    
                    clearInput(setState)
                    props.history.push('/')
                
                } catch(err) {
                    console.log(err)
                    clearInput(setState)

                }
            }
        }
        setLoading(false)
    }
    return (
        <div className={classes.signup}>
            <img src={logo} alt="logo"/>
            

            <div className={classes.signup__container}>
                <h2>Account Signup</h2>
                <form onSubmit={submitHandler} >
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" autoComplete={"off"} value={state.username} onChange={(e) => changeHandler(e,'username')} />   
                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" autoComplete={"off"} value={state.email} onChange={(e) => changeHandler(e,'email')} />
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" value={state.password} onChange={(e) => changeHandler(e,'password')} />
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input type="password" id="confirmPassword" value={state.confirmPassword} onChange={(e) => changeHandler(e,'confirmPassword')} />
                    <button disabled={loading}>
                        { loading ? 'Processing...' : 'Signup' }
                    </button>
                </form>
                

            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        setUser: (user) => dispatch(actionCreator.getUser(user)) 
    }
}

export default connect(null,mapDispatchToProps)(withRouter(Signup))
