import './LoginSeller.css'
import React from 'react';
import {Link, useHistory} from 'react-router-dom';
import { useState } from 'react';
import {auth} from '../firebaseSeller';

import { signInWithEmailAndPassword} from "firebase/auth";

function LoginSeller() {
    const History = useHistory();

    const[email,setEmail]=useState('');
    const[Password,setPassword]=useState('');
  
    const signIn=(e)=>
    {
        e.preventDefault()
    signInWithEmailAndPassword(auth, email, Password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log("succsess");
        console.log(user.uid);
        sessionStorage.setItem('uid', user.uid);
    

        History.push('/seller')
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage)
      });
    }
    
     const register=e=>
     {
         e.preventDefault();
         
         History.push('/Signup')
             

         

     }
     const back =e=>
     {
         e.preventDefault();
         History.push('/SignupSeller')
     }
    
    return (
        <div className='login'>
            <Link to='/'>
            <img className="login-logo"
            src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt=""/>
            </Link>
            <div className="login-container">
                <h1>Sign in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type="text"  value={email} onChange={e=> setEmail(e.target.value)}/>
                    <h5>Password</h5>
                    <input type="password" value={Password} onChange={e=> setPassword(e.target.value)} />

                    <button type="submit" onClick={signIn} className="login-customerButton">Sign In as Seller</button>
                    <button  onClick={back} className="login-customerButton">Back to create Seller account</button>
                    <br/>
                    
                
                   

                </form>
                <p >
                    By signing-in as seller you agree to our Amazon's clone conditions of use & sale.
                    Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads 
                    Notice. 

                </p>
                <button onClick={register} className="login-registerButton">Create your Amazon account</button>
                
            </div>
        </div>
        
    )
}
export default LoginSeller