import React, { useState, useEffect } from 'react';
import { auth } from './components/Authentication/firebase';
import './css/style.css';
import './css/general.css';
import './css/queries.css';

import UserContext from './components/hooks/useContext';
import Header from './components/Header';
import HomePage from './components/HomePage';
import Collection from './components/Collection';
import { Purpose } from './components/Purpose';
import Comments from './components/Feedback/Comments';
import { Donation } from './components/Donation';
import { Footer } from './components/Footer';
import { AboutUs } from './components/AboutUs';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (!auth) return undefined;
    return auth.onAuthStateChanged(setUser);
  }, []);

  return (
    <UserContext.Provider value={user}>
      <Header />

      <main>
        <HomePage />
        <AboutUs />
        <Purpose />
        <Collection />
        {user && <Comments currentUser={user} />}
        <Donation />
      </main>

      <Footer />
    </UserContext.Provider>
  );
}

export default App;
