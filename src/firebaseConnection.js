import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

 var firebaseConfig = {
    apiKey: "AIzaSyC4i1SGMGWjsWM_AV12KIAHlQeTsZK3c38",
    authDomain: "zett-2d69f.firebaseapp.com",
    projectId: "zett-2d69f",
    storageBucket: "zett-2d69f.appspot.com",
    messagingSenderId: "669474853864",
    appId: "1:669474853864:web:98753e3bf298c11de44a5d",
    measurementId: "G-CKQLVPDYVS"
  };
  


  if(!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);  
  }
  
  export default firebase;