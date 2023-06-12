import React, { useState, useEffect } from 'react';
import { auth } from './components/Authentication/firebase';
//css components
import './App.css';
import './css/style.css'
import './css/general.css'
import './css/queries.css'

//regular components
import UserContext from "./components/hooks/useContext";
import firebase from 'firebase/compat/app';
import "firebase/auth";
//import componetns
import Header from './components/Header';
import HomePage from './components/HomePage';
import Collection from './components/Collection';
import { Purpose } from './components/Purpose';
import Comments from './components/Feedback/Comments';
import { Donation } from './components/Donation';
import { Footer } from './components/Footer';
import { AboutUs } from './components/AboutUs';
import CommentForm from './components/Test/CommentForm';
// import Comments from './components/Test/Comments';


function App() {
  //authentication user
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  return (
    <UserContext.Provider value={user}>
      <Header />

      <main>
        <HomePage />
        <AboutUs />
        <Purpose />
        <Collection />
        {
          user ?
            <Comments currentUser={user} />
            :
            console.log("User is signed out")

        }
        <Donation />

        {/* <CommentForm /> */}
        {/* <Comments /> */}
        {/* <ContactUs /> */}
      </main >

      <Footer />
    </UserContext.Provider>
  );
}

export default App;
