import React, { useEffect, useState } from 'react'
import { authService, realtimeDB } from '../../myBase';

const ShowMoreInfo = ({ showMoreInfo }) => {

    const [fullName, setFullName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [gender, setGender] = useState('male')
    const [state, setState] = useState('nsw')
    const [YOB, setYOB] = useState(null)

    const [isNewAccount, setIsNewAccount] = useState(false)


    const GetUserInfo = () => {
        let userObj = authService.currentUser;
        let myPromise = new Promise((myResolve, myReject) => {

            // 이거 어떻게든 object 내에서 기본정보들 갖고있나 확인해야할듯. 어레이로 하니까 제대로 확인못함
            let checkExistingUser = realtimeDB.ref('users/' + authService.currentUser.uid).on('value', (snapshot) => {
                let res = snapshot.val()
                let resArray = Object.values(res)
                resArray.forEach(element => {
                    if (!element) {
                        setIsNewAccount(true)
                    }
                });
            })

            checkExistingUser();

            if (isNewAccount) {
                let data = {
                    fullName: userObj.displayName,
                    phoneNumber: userObj.phoneNumber,
                    YOB: null,
                    state: null,
                    gender: null,
                }
                if (data) {
                    console.log("Promise worked")
                    myResolve(data);
                } else {
                    myReject("Error in Promise");
                }

            } else {
                alert('You are already signed up')
                window.location.reload()
                return null;
            }


        })

        myPromise.then(
            (value) => {
                // console.log(value)
                try {
                    setFullName(value.fullName)
                    setPhoneNumber(value.phoneNumber)

                } catch (error) {
                    console.log(error)
                }
            },
            (error) => {
                console.log(error)
            }


        )
    }

    useEffect(() => {
        if (showMoreInfo) {
            GetUserInfo();
        }

    }, [showMoreInfo])
    const onChange = (e) => {
        e.preventDefault();
        const { target: { name } } = e;
        const { target: { value } } = e;
        let select;
        let option;
        switch (name) {
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

        try {
            await realtimeDB.ref('users/' + authService.currentUser.uid).update({
                email: authService.currentUser.email,
                fullName,
                phoneNumber,
                gender,
                state,
                YOB,
                age: currentYear - YOB,
                createdAt: authService.currentUser.metadata.creationTime,
                lastSignInTime: authService.currentUser.metadata.lastSignInTime
            });
            console.log('Succefully updated the profile')
        } catch (error) {
            console.log(error.message)
        }



    }

    return (
        <form onSubmit={onSubmit} className="" >
            <div className="my-3">
                <h4 style={{ fontWeight: 'lighter' }}>We need more info!</h4>
            </div>
            <div>
                <div className="col-12">
                    <input required type="text" name="fullName" placeholder="Full Name" className="m-3 col-md-3" value={fullName} onChange={onChange} />
                </div>
                <div className="col-12">
                    <input required type="tel" name="phoneNumber" placeholder="Phone Number" className="m-3 col-md-3 " value={phoneNumber ? phoneNumber : ''} onChange={onChange} />
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


export default ShowMoreInfo;