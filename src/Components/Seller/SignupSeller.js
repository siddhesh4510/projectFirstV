import React from 'react'
import {auth,database} from '../firebaseSeller';
import './SignupSeller.css'
import { useState,useEffect } from 'react'; 
import {Link, useHistory} from 'react-router-dom';
import { Alert } from 'react-bootstrap';
import { createUserWithEmailAndPassword } from "firebase/auth";
import {  ref, set } from "firebase/database";

function SignupSeller() {
    
        const History = useHistory()
    
        const[name,setName]=useState('');
        const[mobile,setMobile]=useState('');
        const[email,setEmail]=useState('');
        const[Password,setPassword]=useState('');
        const [ConfirmPassword,setConfirmPassword]=useState('');
        const [currentUser,setcurrentUser]=useState('')
    const[error,setError]=useState('')
    const [loading,setLoading]=useState(false)
    const [id,setID]=useState('')
        async function register(e)
         {
            e.preventDefault()
         if (Password !== ConfirmPassword)
         {
             return setError("password do not match")
         }
         else{

           setError('')
           setLoading(true)

        const result= await  createUserWithEmailAndPassword(auth, email, Password)
       .then((userCredential) =>
        {
          
          
        const x=  userCredential.user.uid
        if(auth)
               {
                   alert("Account created Successfully")
                   
                   History.push('/LoginSeller')
             }
              if(name!=='' && mobile!=='' &&email!=='' && Password!=='' && ConfirmPassword!=='')
                {
                           
                  set(ref(database, 'users/' + x), {
                      username: name,
                      mobile: mobile,
                     
                    });
                  }
  
        })
         .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          alert(errorMessage)
                  
              });    
          } 
       }
      
      
          
          return (
            <div className='login'>
                <Link to='/'>
                <img className="login-logo"
                src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt=""/>
                </Link>
                <div className="login-container">
                    <h1>Create Account</h1>
                    <form onSubmit={register}>
                    {error && <Alert variant="danger">{error}</Alert>}
                        <h5>Your name</h5>
                        <input type="text"  pattern="[a-z||A-Z]+"  value={name} onChange={e=> setName(e.target.value)} required/>
                        <h5>Mobile number</h5>
                        <input type="tel" value={mobile} pattern="((\+*)((0[ -]*)*|((91 )*))((\d{12})+|(\d{10})+))|\d{5}([- ]*)\d{6}" onChange={e=> setMobile(e.target.value)} required/>
                        <h5>Email</h5>
                        <input type="email" value={email} onChange={e=> setEmail(e.target.value)} required />
                        <h5>Password</h5>
                        <input type="password" value={Password} placeholder ="At least 6 characters"onChange={e=> setPassword(e.target.value)} required/>
                        <h5>ConfirmPassword</h5>
                        <input type="password" value={ConfirmPassword}onChange={e=> setConfirmPassword(e.target.value)} required />
                        <div className="a-alert-content">
      Password must be at least 6 characters.
    </div>
    
                        <button type="submit" disabled={loading}  className="login-customerButton">Submit</button>
                        
                        <br/>
                        
    
                    </form>
                    <p >
                        By signing-up as seller you agree to our Amazon's clone conditions of use & sale.
                        Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads 
                        Notice. 
    
                    </p>
                    
                </div>
            </div>
        )
        

        
    
}

export default SignupSeller
