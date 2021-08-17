import React, { useState } from 'react'
import SignIn from './SignIn';
import SignUp from './SignUp';
import SocialLogin from './SocialLogin';

const LoginForm = () => {

    const [isSignIn, setIsSignIn] = useState(true)

    const onSubmit = (e) => {
        e.preventDefault();
        alert('hi')
    }

    return (
        <div id="login-form" className="col-md-12 text-white mx-auto text-center">
            <div>
                <h1 className="text-center mt-5">HUS</h1>
            </div>
            <form onSubmit={onSubmit} className="" >
                {
                    isSignIn
                        ? <SignIn />
                        : <SignUp />
                }
            </form>

            <SocialLogin />
            <div>
                <button className="transparent-button text-dark mt-5" onClick={() => setIsSignIn(!isSignIn)}>{isSignIn ? 'Create Account' : 'Sign In'}</button>
            </div>
        </div>
    )
}

export default LoginForm;