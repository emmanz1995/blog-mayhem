import React from 'react';
import '../Styles/signin.scss'

const Signin = () => {
    return(
        <div className="signin-wrapper">
            <form className="signin-form">
                <h1>Sign In</h1>
                <input type="text" name="username" placeholder="Username" /><br /><br />
                <input type="password" name="password" placeholder="Password" /><br /><br />
                <button>Sign In</button>
            </form>
        </div>
    )
}

export default Signin;
