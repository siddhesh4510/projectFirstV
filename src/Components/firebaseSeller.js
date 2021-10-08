// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getAuth, createUserWithEmailAndPassword ,signInWithEmailAndPassword} from "firebase/auth";
import { getDatabase,ref } from "firebase/database";
import { getStorage } from "firebase/storage";
import { initializeApp } from 'firebase/app';
const secondaryAppConfig = {
    apiKey: "AIzaSyCmIFRNfmznyNAmWlEhgKBKJWVr-I1EsjE",
    authDomain: "amaon-clone-seller.firebaseapp.com",
    projectId: "amaon-clone-seller",
    storageBucket: "amaon-clone-seller.appspot.com",
    messagingSenderId: "689083532997",
    appId: "1:689083532997:web:1debe30327a732dabd52ac",
    measurementId: "G-LXFJBXF15R",
    databaseURL:"https://amaon-clone-seller-default-rtdb.firebaseio.com"
  };
  
 const app1 = initializeApp(secondaryAppConfig,"third");
 const db = getFirestore(app1);
 const auth= getAuth(app1);
 const database = getDatabase(app1);
const storage1=getStorage(app1);
const newref=ref;
  export {newref,storage1,database,auth,db as default} 
