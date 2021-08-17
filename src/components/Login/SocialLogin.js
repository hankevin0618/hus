import React from 'react'

const SocialLogin = () => {

    const onSocialClick = e => {
        e.preventDefault();
        alert('social')
    }

    return (
        <div>
            <button onClick={onSocialClick} className="transparent-button text-dark">Google</button>
            <button onClick={onSocialClick} className="transparent-button text-dark">Facebook</button>
        </div>
    )
}

export default SocialLogin;