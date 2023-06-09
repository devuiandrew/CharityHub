import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

firebase.initializeApp({
    apiKey: "AIzaSyCN6LOPEekcrbkRdq97cs7A8wttvmOY9iM",
    authDomain: "charity-hub-4236f.firebaseapp.com",
    projectId: "charity-hub-4236f",
    storageBucket: "charity-hub-4236f.appspot.com",
    messagingSenderId: "1058773547831",
    appId: "1:1058773547831:web:00e91ed9248022eab478b2"
});

const fb = firebase;
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const signInWithGoogle = () => auth.signInWithPopup(provider);

export { fb, signInWithGoogle, auth };

