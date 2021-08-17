import React from 'react';
import LoginForm from '../components/Login/LoginForm';

const Auth = () => {

    return (
        <section id="auth" className="container-fluid">
            <div className="row" style={{ minHeight: '100vh', alignContent: 'center' }}>
                <LoginForm />
            </div>
        </section>
    )
}

export default Auth;