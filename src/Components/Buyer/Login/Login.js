import './Login.css';
import React from 'react';
import {Link, useHistory} from 'react-router-dom';
import { useState } from 'react';
import {auth1,firebase} from './firebaseBuyer';
// import {} from '../Seller/SignupSeller';
import {  signInWithPopup, GoogleAuthProvider ,signInWithEmailAndPassword } from "firebase/auth";
import {db , auth} from '../../../FireBase/fireBase'


function Login() {
    const History = useHistory();

    const[email,setEmail]=useState('');
    const[Password,setPassword]=useState('');
    console.log(auth1);
    if(auth==auth1) {
        console.log("Equal")
    }
    else{
        console.log("Not e")
    }

    const googleSignIn=(e)=>{
        e.preventDefault();
        console.log('google sign');
        const provider = new GoogleAuthProvider();
        auth1.languageCode = 'it';
        provider.setCustomParameters({
            'login_hint': 'user@example.com'
          });
          
        provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
        signInWithPopup(auth1, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                console.log(user.displayName);
                sessionStorage.setItem('name', user.displayName);
                History.push('/');
                // ...
                console.log("Login Success new Google")
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
                console.log(error);
                console.log("nfailed");
            });
    }
    const signIn=(e)=>{
        e.preventDefault();
        console.log(email);
        console.log(Password);
        signInWithEmailAndPassword(auth1, email, Password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user);
                
                History.push('/');
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage);
                alert(error.message);
            });
    }
      const register=e=>
     {
         e.preventDefault();
         
        History.push('/signup')
    }
  
    //  const signIn = e=>{
    //      e.preventDefault();
    //      auth1.signInWithEmailAndPassword(email,Password)
    //      .then(auth1=>{
    //          History.push('/Home')
    //      })
    //      .catch(error=> alert(error.message))
    //  }
    //  const googleSignIn= async(e)=>{
    //      e.preventDefault();
    //      try{
    //   const google_provider =new firebase.auth.GoogleAuthProvider()
    
    //  firebase.auth().signInWithPopup(google_provider).then(function(result){
       
    
    //     alert("Success..you are Signed in with google");
    //     History.push('/Home')
    //       firebase.auth().onAuthStateChanged(function(user)
    //     {
 
    //        if(user)
    //        {
               
    //            const id=user.uid
               
               
 
               
    //        }
    //     })
        
        
    //     })
    // }catch(err){
    //     console.log(err.message);
    //     alert("Sorry you are  unable to login with google");
        
    //     };
   
    // }
        
    
   
       
   
        


    //  const register=e=>
    //  {
    //      e.preventDefault();
         
    //     //  History.push('/signup')
             

         

    //  }
     const registerAsSeller=e=>
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
                    <input type="text"   onChange={e=> setEmail(e.target.value)} />
                    <h5>Password</h5>
                    <input type="password"  onChange={e=> setPassword(e.target.value)}  />

                    <button type="submit" onClick={signIn} className="login-customerButton">Sign In As Customer</button>
                    <br/>
                    
                
                    <button type="submit" onClick={googleSignIn} className="login-sellerButton">Sign In with Google</button>

                </form>
                <p >
                    By signing-in you agree to our Amazon's clone conditions of use & sale.
                    Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads 
                    Notice. 

                </p>
                <button  className="login-registerButton" onClick={register}>Create your Amazon account</button>
                <button onClick ={registerAsSeller} className="login-registerButton">Become an Amazon Seller ? </button>
            </div>
        </div>
        
    )
}

export default Login

