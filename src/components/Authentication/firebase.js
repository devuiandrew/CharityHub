import 'firebase/compat/auth';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyCN6LOPEekcrbkRdq97cs7A8wttvmOY9iM",
    authDomain: "charity-hub-4236f.firebaseapp.com",
    projectId: "charity-hub-4236f",
    storageBucket: "charity-hub-4236f.appspot.com",
    messagingSenderId: "1058773547831",
    appId: "1:1058773547831:web:ab7bf1c657923227b478b2"
};
const app = initializeApp(firebaseConfig)

const auth = getAuth(app);
const db = getFirestore(app)
const provider = new GoogleAuthProvider();
const signInWithGoogle = () => signInWithPopup(auth, provider);



export { signInWithGoogle, auth, db };

