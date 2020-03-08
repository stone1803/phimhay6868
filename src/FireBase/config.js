import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyD8BDwXIIbR-h73X5u-v0QMDst4OtCUeDk",
    authDomain: "phimhay6868.firebaseapp.com",
    databaseURL: "https://phimhay6868.firebaseio.com",
    projectId: "phimhay6868",
    storageBucket: "phimhay6868.appspot.com",
    messagingSenderId: "673725972913",
    appId: "1:673725972913:web:b63d4d8035b063702d7d90",
    measurementId: "G-9MCQGRLW1R"
  };
firebase.initializeApp(firebaseConfig);
firebase.firestore();
export default firebase;
