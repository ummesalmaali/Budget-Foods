import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import UserContext, { UserProvider } from '../../UserContext';
import { useHistory, useLocation } from 'react-router';



const Login = () => {
    const [user,setUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    if(firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig);
    }
    
    const handleGoogleSignIn = () =>{
      var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
        .then((result) => {
         const {displayName,email} = result.user
         const signedInUser = {name:displayName,email}
         setUser(signedInUser);
          history.replace(from);
   
    // ...
  }).catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
    }
    return (
        <div>
           <h1>This is login</h1>
           <button onClick={handleGoogleSignIn}>Google sign in</button>
        </div>
    );
};

export default Login;