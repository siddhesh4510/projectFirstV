// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue} from "firebase/database";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBoeaI_RVYNrtFIPoV685G0nLC3cA2DtSs",
  authDomain: "practice-15d63.firebaseapp.com",
  databaseURL: "https://practice-15d63-default-rtdb.firebaseio.com",
  projectId: "practice-15d63",
  storageBucket: "practice-15d63.appspot.com",
  messagingSenderId: "982208063922",
  appId: "1:982208063922:web:22e2e657f81fad32b35cab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
var lst;
const db = getDatabase();
const starCountRef = ref(db, 'products/');
console.log(starCountRef);
onValue(starCountRef, (snapshot) => {
    const data = snapshot.val();
    console.log(Object.values(data));
    lst=Object.values(data);
  });

const auth = getAuth();
export  {db , auth};

  