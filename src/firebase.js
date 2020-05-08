import firebase from "firebase";
import 'firebase/firestore'
import 'firebase/firebase-auth'
import 'firebase/storage'

// Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyCYYIJyafEqzrfzBWmJg4_h5QfnXXqDN5E",
    authDomain: "vue-shop-b598c.firebaseapp.com",
    databaseURL: "https://vue-shop-b598c.firebaseio.com",
    projectId: "vue-shop-b598c",
    storageBucket: "vue-shop-b598c.appspot.com",
    messagingSenderId: "665657734154",
    appId: "1:665657734154:web:7ca003da9904a44e559bf3",
    measurementId: "G-L395ELF5P4"
  };
  // Initialize Firebase
  const fb = firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  
  export {fb, db}
