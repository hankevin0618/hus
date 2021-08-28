import React from 'react'
import { authService, firebaseInstance, realtimeDB } from '../../myBase';

const SocialLogin = () => {


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
                alert('Not yet implemented')
                break;
            default:
                break;
        }
        if (process) {
            await realtimeDB.ref('users/' + authService.currentUser.uid).update({
                email: authService.currentUser.email,
                fullName: authService.currentUser.displayName,
                createdAt: authService.currentUser.metadata.creationTime,
                lastSignInTime: authService.currentUser.metadata.lastSignInTime
            })

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