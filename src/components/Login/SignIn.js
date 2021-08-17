import React, { useState } from 'react'

const SignIn = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onChange = (e) => {
        e.preventDefault();
        const { target: { name } } = e;
        const { target: { value } } = e;

        switch (name) {
            case 'email':
                setEmail(value)
                break;
            case 'password':
                setPassword(value)
                break;

            default:
                break;
        }

    }

    return (
        <>
            <div className="my-3">
                <h4 style={{ fontWeight: 'lighter' }}>Log in to your account</h4>
            </div>
            <>
                <input type="text" name="email" placeholder="Email" className="my-3" onChange={onChange} />
                <input type="password" name="password" placeholder="Password" className="my-3" onChange={onChange} />
                <button type="submit" name="submit" className="my-1">Sign In</button>
            </>
        </>
    )
}

export default SignIn;