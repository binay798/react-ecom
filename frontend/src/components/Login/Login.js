import React from 'react'
import classes from './Login.module.scss';
import {logo } from './../../assets/images'
import { Link, withRouter } from 'react-router-dom';
import { auth } from './../../firebase';
import { connect } from 'react-redux';
import * as actionCreator from './../../store/actions/index'


const clearInput = (setEmail,setPassword) => {
    setEmail('');
    setPassword('');
}
function Login(props) {
    const [email,setEmail] = React.useState('');
    const [password,setPassword] = React.useState('');
    const [loading,setLoading] = React.useState(false);

    

    const submitHandler = async(e) => {
        e.preventDefault();
        setLoading(true)
        if(email !== '' && password !== '') {
            try {
                let user = await auth.signInWithEmailAndPassword(email,password);
                user = JSON.stringify(user);
                user = JSON.parse(user);
                clearInput(setEmail,setPassword)

                props.setUser(user.user)
                setLoading(false)
                props.showNotification('Logged in successfully')
                props.history.push('/');
            } catch(err) {
                console.log(err)
                props.showNotification(err.message)

                clearInput(setEmail,setPassword)
                setLoading(false)
            }
        }
        
    }
    return (
        <div className={classes.login}>
            <img src={logo} alt="logo"/>
            

            <div className={classes.login__container}>
                <h2>Account Login</h2>
                <form onSubmit={submitHandler} >
                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" value={email} autoComplete={"off"} onChange={(e) => setEmail(e.target.value)} />
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button disabled={loading}>
                        {loading ? 'Processing...' : 'Login'}
                    </button>
                </form>
                <p><span>New to shopee?</span></p>
                <Link to="/accounts/signup" style={{textDecoration: 'none'}}><button disabled={false}>Create your shopee account</button></Link>

            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        setUser: (user) => dispatch(actionCreator.getUser(user)),
        showNotification: (content) => dispatch(actionCreator.showNotification(content))
    }
}

export default connect(null,mapDispatchToProps)(withRouter(Login));
