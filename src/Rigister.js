import './Main.css';
import './Media.css';
import React from 'react';
import { MyContext } from './App';
import { Link } from 'react-router-dom';

function Register() {
    let bag = React.useContext(MyContext);
    let firstName = React.useRef();
    let lastName = React.useRef();
    let emailAddress = React.useRef();
    let password = React.useRef();

    function updateRegisterDetails(){
        let userRegisterDetails = {
            firstName : firstName.current.value,
            lastName : lastName.current.value,
            emailAddress : emailAddress.current.value,
            password : password.current.value
        };
        console.log(userRegisterDetails)
        let setRegisterDetails = bag.setRegisterDetails;
        setRegisterDetails(userRegisterDetails)
    }

  return (
    <div>
        <div className="parent-wrapper">
            <div className='login-wrapper'>
                <p className='head-line'>Welcome to Shopiee Zone</p>
                <p className='instruction'>Easy register! <Link to="/Login"><a className='sign'>Login?</a></Link> </p>
                <div>
                    <div className='lable-wrapper'>
                        <p className='label'>First name</p>
                        <input className='input-filed' ref={firstName} type="text"/>
                    </div>
                    <div className='lable-wrapper'>
                        <p className='label'>Last name</p>
                        <input className='input-filed' ref={lastName} type="text"/>
                    </div>
                    <div className='lable-wrapper'>
                        <p className='label'>email address</p>
                        <input className='input-filed' ref={emailAddress} type="text"/>
                    </div>
                    <div className='lable-wrapper'>
                        <p className='label'>Passward</p>
                        <input className='input-filed' ref={password} type="password"/>
                    </div>
                </div>
                <div className='login-footer'>
                    <Link className='link' to="/Login"><p className='create-acc'>Already have an account</p></Link>
                    <Link to="/Login"><button className='next' onClick={updateRegisterDetails}>Next</button></Link> 
                </div>
            </div>
        </div>
    </div>
  )
}

export default Register;
