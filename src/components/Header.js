import React, { useState, useEffect, useRef } from 'react';
import { signInWithGoogle, auth } from "./Authentication/firebase";
import logo_2 from '../images/logo-2.png'


export default function Header() {

    // Make mobile navigation work
    const btnNavEl = React.useRef(null);
    const headerEl = React.useRef(null);

    const [isToggled, setIsToggled] = useState(true);

    const [user, setUser] = useState(null);

    const handleToggle = () => {
        setIsToggled(!isToggled);
    };

    const handleClick = () => {
        headerEl.current.classList.toggle('nav-open');

    };

    useEffect(() => {
        const element = btnNavEl.current;
        element.addEventListener('click', handleClick);

        return () => {
            element.removeEventListener('click', handleClick);
        };
    }, []);


    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setUser(user);
        });
        return () => unsubscribe();
    }, []);



    return (
        <header ref={headerEl} className="header">
            <a href="#" className='logo'>
                {
                    <img className="logo" alt="Omnifood logo" src={logo_2} />
                }

            </a>

            <nav className="main-nav">
                <ul className="main-nav-list">
                    <li><a className="main-nav-link" href="#vision">About</a></li>
                    <li><a className="main-nav-link" href="#collection">Our Collection</a></li>
                    <li>
                        <a className="main-nav-link" href="#donation">Donation</a>
                    </li>
                    <li><a className="main-nav-link" href="#ctu">Contact Us</a></li>
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

            <button ref={btnNavEl} className="btn-mobile-nav" onClick={handleToggle}>
                {isToggled ?
                    <ion-icon className="icon-mobile-nav" name="menu-outline"></ion-icon>
                    :
                    <ion-icon className="icon-mobile-nav" name="close-outline"></ion-icon>
                }
            </button>
        </header>);
}
