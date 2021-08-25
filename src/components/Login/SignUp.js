import React, { useState } from 'react'
import { authService, realtimeDB } from '../../myBase'

const SignUp = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [fullName, setFullName] = useState('')


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
            case 'fullName':
                setFullName(value)
                break;
            default:
                break;
        }

    }

    const onSubmit = async (e) => {
        e.preventDefault();
        let data;
        data = await authService.createUserWithEmailAndPassword(
            email,
            password,
        );
        if (data) {
            realtimeDB.ref('users/' + authService.currentUser.uid).set({
                email,
                fullName,
                createdAt: authService.currentUser.metadata.creationTime,
                lastSignInTime: authService.currentUser.metadata.lastSignInTime
            });
        }

    }

    return (
        <form onSubmit={onSubmit} className="" >
            <div className="my-3">
                <h4 style={{ fontWeight: 'lighter' }}>Become a Member!</h4>
            </div>
            <div>
                <div className="col-12">
                    <input required type="text" name="email" placeholder="Email" className="m-3 col-md-12" onChange={onChange} />
                    <input required type="password" name="password" placeholder="Password" className="m-3 col-md-12" onChange={onChange} />
                    <input required type="text" name="fullName" placeholder="Full Name" className="m-3 col-md-12" onChange={onChange} />
                </div>
                <button type="submit" name="submit" className="my-3 col-4">Sign Up</button>
            </div>
        </form>
    )
}

export default SignUp;