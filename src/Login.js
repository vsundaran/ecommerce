import './Main.css';
import './Media.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { MyContext } from './App';

function Login() {
    let checkBox = React.useRef();
    let password = React.useRef();
    let emailAddress = React.useRef();
    let bag = React.useContext(MyContext);
    let [checkBoxState,setCheckBoxState] = React.useState("password")


    function checkUser(){
        let registerDetails = bag.registerDetails;
        

        if(registerDetails.emailAddress == emailAddress.current.value && registerDetails.password == password.current.value){
            let setAuth = bag.setAuth;
            setAuth(true);
        }
    }

    function show(){
        if(checkBoxState === "password"){
            setCheckBoxState("text");
        }
        else{
            setCheckBoxState("password") 
        }
        
    }
    
  return (
    <div>
        <div className="parent-wrapper">
            <div className='login-wrapper'>
                <p className='head-line'>Welcome to Shopiee Zone</p>
                <p className='instruction'>Must register! <Link to="/"><a className='sign'>Sign up?</a></Link></p>
                <div>
                    <div className='lable-wrapper'>
                        <p className='label'>User name or email address</p>
                        <input className='input-filed' type="text" ref={emailAddress}/>
                    </div>
                 
                    <div className='lable-wrapper'>
                        <p className='label-checked'>Passward</p>                    
                        <input type="checkbox" className='checkBox' onChange={show} ref={checkBox}/>
                    </div>
                    <input className='input-filed' type={checkBoxState} ref={password}/>
                </div>
                <div className='login-footer'>
                    <Link  className='link' to="/"><p className='create-acc'>Create an account</p></Link>
                    <Link  className='link' to="/Home"><button className='next' onClick={checkUser}>Next</button></Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login;
