import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAS-3FGkmQjc9jj-FJnLz9jtvYTfndfeVE",
  authDomain: "ducktunes-69de9.firebaseapp.com",
  projectId: "ducktunes-69de9",
  storageBucket: "ducktunes-69de9.appspot.com",
  messagingSenderId: "1073826975060",
  appId: "1:1073826975060:web:6d73223383a145a74e4cc1"
};

  firebase.initializeApp(firebaseConfig);

  export  default firebase;