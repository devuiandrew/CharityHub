import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCN6LOPEekcrbkRdq97cs7A8wttvmOY9iM",
    authDomain: "charity-hub-4236f.firebaseapp.com",
    projectId: "charity-hub-4236f",
    storageBucket: "charity-hub-4236f.appspot.com",
    messagingSenderId: "1058773547831",
    appId: "1:1058773547831:web:00e91ed9248022eab478b2",
    databaseURL: "gs://charity-hub-4236f.appspot.com/"
};
const app = firebase.initializeApp(firebaseConfig)

const auth = firebase.auth();
const db = getFirestore(app)
const provider = new firebase.auth.GoogleAuthProvider();
const signInWithGoogle = () => auth.signInWithPopup(provider);

export { signInWithGoogle, auth, db };

