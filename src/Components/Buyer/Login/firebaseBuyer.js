// import    firebase from "firebase";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue} from "firebase/database";
import { getAuth } from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig1 = {
    apiKey: "AIzaSyAaLI4buPHOXTWA2CbYDjTNmPXeoE3u34k",
    authDomain: "clone-df505.firebaseapp.com",
    projectId: "clone-df505",
    storageBucket: "clone-df505.appspot.com",
    messagingSenderId: "371181628191",
    appId: "1:371181628191:web:e9e1c6d0fa19ff37ef1e2a",
    measurementId: "G-D13B4FL177",
    databaseURL:"https://clone-df505-default-rtdb.firebaseio.com"
  };
//   const firebaseApp = firebase.initializeApp(firebaseConfig);
//  // export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();
  

//   const db=firebaseApp.firestore();
//   const auth1 =firebase.auth();
//   const storage=firebase.storage();
//   const database=firebase.database();
const app1 = initializeApp(firebaseConfig1 , "secondary");
const db1 = getDatabase(app1);
const auth1 = getAuth(app1);


  export {auth1 , db1};