import React, { useState, useEffect } from 'react';
import { signInWithGoogle, auth } from "./Authentication/firebase";
import logo_2 from '../images/logo-2.png'


export default function Header() {

    const [user, setUser] = useState(null);
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setUser(user);
        });
        return () => unsubscribe();
    }, []);

    return (<header className="header">
        <a href="#" className='logo'>
            {
                <img className="logo" alt="Omnifood logo" src={logo_2} />
            }

        </a>

        <nav className="main-nav">
            <ul className="main-nav-list">
                <li><a className="main-nav-link" href="#how">About</a></li>
                <li><a className="main-nav-link" href="#meals">Our Collection</a></li>
                <li>
                    <a className="main-nav-link" href="#testimonials">Donation</a>
                </li>
                <li><a className="main-nav-link" href="#pricing">Contact Us</a></li>
                <li>
                    <div className='main-nav-auth'>
                        {user ? (
                            <div className='main-nav-auth-inner'>
                                {/* <span className='main-nav-name'>{user.displayName}</span> */}
                                <img src={user.photoURL} alt="user" className="main-nav-img" />
                                <button className='btn btn-revers' onClick={() => auth.signOut()}>Sign out</button>
                            </div>
                        ) : (
                            <button className='btn btn-revers' onClick={signInWithGoogle}>Signin</button>
                        )}
                    </div>
                </li>
            </ul>
        </nav>

        <button className="btn-mobile-nav">
            <ion-icon className="icon-mobile-nav" name="menu-outline"></ion-icon>
            <ion-icon className="icon-mobile-nav" name="close-outline"></ion-icon>
        </button>
    </header>);
}
