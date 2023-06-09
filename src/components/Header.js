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

    return (<header class="header">
        <a href="#" className='logo'>
            {
                <img class="logo" alt="Omnifood logo" src={logo_2} />
            }

        </a>

        <nav class="main-nav">
            <ul class="main-nav-list">
                <li><a class="main-nav-link" href="#how">About</a></li>
                <li><a class="main-nav-link" href="#meals">Our Collection</a></li>
                <li>
                    <a class="main-nav-link" href="#testimonials">Donation</a>
                </li>
                <li><a class="main-nav-link" href="#pricing">Contact Us</a></li>
                <li>
                    {user ? (
                        <div>
                            {user.displayName}
                            <button onClick={() => auth.signOut()}>Sign out</button>
                        </div>
                    ) : (
                        <button onClick={signInWithGoogle}>Signin</button>
                    )}

                </li>
            </ul>
        </nav>

        <button class="btn-mobile-nav">
            <ion-icon class="icon-mobile-nav" name="menu-outline"></ion-icon>
            <ion-icon class="icon-mobile-nav" name="close-outline"></ion-icon>
        </button>
    </header>);
}
