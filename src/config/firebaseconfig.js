import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAA43yR6JocXsJTqLMJlswIEFA_ip52ihI",
    authDomain: "react-login-69dd7.firebaseapp.com",
    projectId: "react-login-69dd7",
    storageBucket: "react-login-69dd7.appspot.com",
    messagingSenderId: "510156842796",
    appId: "1:510156842796:web:aef8d6c28e7b8f335fae89"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebaseConfig
