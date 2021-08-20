import React, { useState } from 'react'
import { authService, realtimeDB } from '../../myBase'

const SignUp = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [fullName, setFullName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [gender, setGender] = useState('male')
    const [state, setState] = useState('nsw')
    const [YOB, setYOB] = useState(null)

    const onChange = (e) => {
        e.preventDefault();
        const { target: { name } } = e;
        const { target: { value } } = e;
        let select;
        let option;
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
            case 'phoneNumber':
                setPhoneNumber(value)
                break;
            case 'gender':
                select = document.getElementById(e.target.id);
                option = select.options[select.selectedIndex].value;
                setGender(option)
                break;
            case 'state':
                select = document.getElementById(e.target.id);
                option = select.options[select.selectedIndex].value;
                setState(option)
                break;
            case 'YOB':
                setYOB(value)
                break;

            default:
                break;
        }

    }

    const onSubmit = async (e) => {
        e.preventDefault();

        let currentYear = new Date().getFullYear();
        let data;
        data = await authService.createUserWithEmailAndPassword(
            email,
            password,
        );
        if (data) {
            realtimeDB.ref('users/' + authService.currentUser.uid).set({
                email,
                fullName,
                phoneNumber,
                gender,
                state,
                YOB,
                age: currentYear - YOB,
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
                    <input required type="text" name="email" placeholder="Email" className="m-3 col-md-3" onChange={onChange} />
                    <input required type="password" name="password" placeholder="Password" className="m-3 col-md-3" onChange={onChange} />
                    <input required type="text" name="fullName" placeholder="Full Name" className="m-3 col-md-3" onChange={onChange} />
                </div>
                <div className="col-12">
                    <input required type="tel" name="phoneNumber" placeholder="Phone Number" className="m-3 col-md-3 " onChange={onChange} />
                    <select required name="state" className="m-3 col-md-3 " id="state" onChange={onChange} >
                        <option value="nsw">NSW</option>
                        <option value="qld">QLD</option>
                        <option value="vic">VIC</option>
                        <option value="tas">TAS</option>
                        <option value="wa">WA</option>
                        <option value="sa">SA</option>
                    </select>
                    <select required name="gender" className="m-3 col-md-3 " id="gender" onChange={onChange} >
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                    <input required type="number" name="YOB" placeholder="Year of Birth" className="m-3 col-md-3 " onChange={onChange} />

                </div>

                <button type="submit" name="submit" className="my-3 col-4">Sign Up</button>
            </div>
        </form>
    )
}

export default SignUp;