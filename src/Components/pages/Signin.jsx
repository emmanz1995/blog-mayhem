import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import '../scss/signin.scss';
import AuthService from '../../Service/AuthService';

const Signin = () => {
    const history = useHistory();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const signin = (evt) => {
        evt.preventDefault();
        AuthService.onSignin(username, password)
        .then(() => {
            history.push('/dashboard')
        })
        .catch(error => console.log(error))
    }
    return(
        <div className="signin-wrapper">
            <div className="signin-opacity">
                <img src="asset/react-logo.png" alt="" height="100" width="100"/>
                <form className="signin-form">
                    <h1>Sign In</h1>
                    <input type="text" name="username" placeholder="Username" onChange={(evt) => setUsername(evt.target.value)} value={username} /><i className="fas fa-user fa-1x" /><br /><br />
                    <input type="password" name="password" placeholder="Password" onChange={(evt) => setPassword(evt.target.value)} value={password} /><i className="fas fa-lock fa-1x" /><br /><br />
                    <button onClick={signin}>Sign In</button>
                    <br />
                    <a href="">Forgot your Password, click me!</a>
                </form>
            </div>
        </div>
    )
}

export default Signin;
