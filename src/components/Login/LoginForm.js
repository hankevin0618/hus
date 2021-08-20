import React, { useState } from 'react'
import SignIn from './SignIn';
import SignUp from './SignUp';
import SocialLogin from './SocialLogin';

const LoginForm = () => {

    const [isSignIn, setIsSignIn] = useState(true)
    const [showMoreInfo, setShowMoreInfo] = useState(false)

    // social login js에서 뭘로 하던간에 setshowmoreinfo를 true로 만들면서 더 많은 정보를 요청
    // 지금 여기선 showmoreinfo 파일을 하나 새로 파서 conditional 하게 보여주는 걸 만들기
    return (
        <div id="login-form" className="col-lg-7 col-md-8 col-sm-10 col-xs-12 col-xl-6 text-white mx-auto text-center">
            <div>
                <h1 className="text-center mt-5">HUS</h1>
                <h3 className="monte">Have your say</h3>
            </div>
            <div>

                {
                    isSignIn
                        ? <SignIn />
                        : <SignUp />
                }

            </div>

            <SocialLogin isSignIn={isSignIn} />
            <div className="my-3 d-grid">
                <span style={{ fontWeight: 'bold' }}>{isSignIn ? "Not a member yet?" : "Are you a member?"}</span>
                <button className=" mb-3 transparent-button" onClick={() => setIsSignIn(!isSignIn)}>{isSignIn ? 'Create Account' : 'Sign In'}</button>
            </div>
        </div>
    )
}

export default LoginForm;