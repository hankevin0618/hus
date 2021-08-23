import React from 'react'
import { authService, firebaseInstance } from '../../myBase';

const SocialLogin = ({ isSignIn, setShowMoreInfo }) => {


    const onSocialClick = async (e) => {
        e.preventDefault();
        const { target: { name } } = e;
        let provider;
        let process;

        switch (name) {
            case 'google':
                provider = new firebaseInstance.auth.GoogleAuthProvider()
                process = await authService.signInWithPopup(provider)
                break;
            case 'facebook':

                break;
            default:
                break;
        }

        if (!isSignIn && process) {
            // More info page need to show
            setShowMoreInfo(true)

        }

    }

    return (
        <div>
            <button name="google" onClick={onSocialClick} className="transparent-button text-dark">Google</button>
            <button name="facebook" onClick={onSocialClick} className="transparent-button text-dark">Facebook</button>
        </div>
    )
}

export default SocialLogin;