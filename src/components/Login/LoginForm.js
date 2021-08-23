import React, { useState } from 'react'
import ShowMoreInfo from './ShowMoreInfo';
import SignIn from './SignIn';
import SignUp from './SignUp';
import SocialLogin from './SocialLogin';

const LoginForm = () => {

    const [isSignIn, setIsSignIn] = useState(true)
    const [showMoreInfo, setShowMoreInfo] = useState(false)


    const HandleForm = () => {
        if (showMoreInfo) {
            return <ShowMoreInfo showMoreInfo={showMoreInfo} setShowMoreInfo={setShowMoreInfo} />
        }

        if (isSignIn && !showMoreInfo) {
            return (
                <SignIn />
            )
        }

        if (!isSignIn && !showMoreInfo) {
            return (
                <SignUp />
            )
        }


        return (
            <div>Error</div>
        )
    }

    return (
        <div id="login-form" className="col-lg-7 col-md-8 col-sm-10 col-xs-12 col-xl-6 text-white mx-auto text-center">
            <div>
                <h1 className="text-center mt-5">HUS</h1>
                <h3 className="monte">Have your say</h3>
            </div>
            <div>
                <HandleForm />

            </div>

            {
                !showMoreInfo &&
                <>
                    <SocialLogin isSignIn={isSignIn} setShowMoreInfo={setShowMoreInfo} />
                    <div className="my-3 d-grid">
                        <span style={{ fontWeight: 'bold' }}>{isSignIn ? "Not a member yet?" : "Are you a member?"}</span>
                        <button className=" mb-3 transparent-button" onClick={() => setIsSignIn(!isSignIn)}>{isSignIn ? 'Create Account' : 'Sign In'}</button>
                    </div>
                </>
            }

        </div>
    )
}

export default LoginForm;