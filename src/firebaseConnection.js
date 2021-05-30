import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

var firebaseConfig = {
    apiKey: "AIzaSyDt3YVGUsRPCHadJuGb45O5ENmh8PFf--U",
    authDomain: "appdeingles-26c62.firebaseapp.com",
    projectId: "appdeingles-26c62",
    storageBucket: "appdeingles-26c62.appspot.com",
    messagingSenderId: "577347201242",
    appId: "1:577347201242:web:662fc780fe007e72a6dde3",
    measurementId: "G-GR1GR5GGH9"
  };
  
  if(!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);  
  }
  
  export default firebase;