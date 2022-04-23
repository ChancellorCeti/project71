import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here

const firebaseConfig = {
  apiKey: "AIzaSyAMckKyiWP9Dfx4dQ9GPWhD0JUwJNkN5y8",
  authDomain: "eride-284ac.firebaseapp.com",
  projectId: "eride-284ac",
  storageBucket: "eride-284ac.appspot.com",
  messagingSenderId: "156454976095",
  appId: "1:156454976095:web:aacd9ce0b098c3b89339ea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
