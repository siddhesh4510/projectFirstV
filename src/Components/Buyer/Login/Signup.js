import './Login.css'
import React from 'react';
import { useState,useEffect } from 'react'; 
import {Link, useHistory} from 'react-router-dom';
import {auth1, db1} from './firebaseBuyer';
import { Alert } from 'react-bootstrap';
import { createUserWithEmailAndPassword } from "firebase/auth";

import { getDatabase, ref, set } from "firebase/database";





 export default function Signup() {
     const History = useHistory()
    
    const[name,setName]=useState('');
    const[mobile,setMobile]=useState('');
    const[email,setEmail]=useState('');
    const[Password,setPassword]=useState('');
    const [ConfirmPassword,setConfirmPassword]=useState('');
    const [currentUser,setcurrentUser]=useState()
    const[error,setError]=useState('')
    const [loading,setLoading]=useState(true)
    const [id,setID]=useState('')
    //       const register=async (e)=>
    //  {
    //      e.preventDefault()
    //      if (Password !== ConfirmPassword)
    //      {
    //          return setError("password do not match")
    //      }
    //      else{

    //        setError('')
    //        setLoading(true)
    //        try{
    //   const result=  await  auth1.createUserWithEmailAndPassword(email,Password)
    //   const x=(result.user.uid)
       
      
         
             
    //          if(auth1)
    //          {
    //              alert("Account created Successfully")
                
               
                  
    //               History.push('/login')
                 
                

                 

    //          }
    //           if(name!=='' && mobile!=='' &&email!=='' && Password!=='' && ConfirmPassword!=='')
    //           {
                         
    //              const store= db1.ref("users/"+x)
    //              const users={
                 
    //                  name :name,
    //                  mobile:mobile,
                    
    //              };
    //                store.push(users)
    //          }
            
    //         }
    //         catch(error){
    //             setLoading(true)
    //             alert(error.message)
                
    //         }
    
    //     }
    
    //  }
    const register=async (e)=>{
        e.preventDefault();
        

         if (Password !== ConfirmPassword)
         {
             return setError("password do not match")
         }
         else{
            setError('')
            setLoading(true);
            await createUserWithEmailAndPassword(auth1, email, Password)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    console.log(userCredential);

                    // ...
                    if(name!=='' && mobile!=='' && email!=='' && Password!=='' && ConfirmPassword!==''){
                    console.log("Created sucessfully");
                    set(ref(db1, 'users/' + user.uid), {
                        username: name,
                        mobile: mobile,
                    })
                    History.push('/login');
                }

                       })

                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorMessage);
                    alert(errorMessage);
                    // ..
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
                
                {error && <Alert variant="danger">{error}</Alert>}

                <form onSubmit={register} >
                    <h5>Your name</h5>
                    <input type="text"  pattern="[a-z||A-Z]+"  value={name} onChange={e=> setName(e.target.value)} required/>
                    <h5>Mobile number</h5>
                    <input type="tel" value={mobile} pattern="((\+*)((0[ -]*)*|((91 )*))((\d{12})+|(\d{10})+))|\d{5}([- ]*)\d{6}" onChange={e=> setMobile(e.target.value)} required/>
                    <h5>Email</h5>
                    <input type="email" value={email} onChange={e=> setEmail(e.target.value)} required />
                    <h5>Password</h5>
                    <input type="password" value={Password} placeholder ="At least 6 characters"onChange={e=> setPassword(e.target.value)} required />
                    <h5>ConfirmPassword</h5>
                    <input type="password" value={ConfirmPassword} onChange={e=> setConfirmPassword(e.target.value)} required />
                    <div className="a-alert-content">
  Password must be at least 6 characters.
</div>

                    <button  type="submit"   className="login-customerButton">Submit</button>
                    
                    <br/>
                    

                </form>
                <p >
                    By signing-up you agree to our Amazon's clone conditions of use & sale.
                    Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads 
                    Notice.

                </p>
                
            </div>
        </div>
    )


    }



    