import React from 'react';
import HandsImg from '../images/MainPagePhoto.png'

export default function HomePage() {
    return (<section className="section-hero card-box-shadow">
        <div className="hero">
            <div className="hero-text-box">
                <h1 className="heading-primary heading-white">
                    Welcome to Charity Hub
                </h1>
                <p className="hero-description">
                    We are a charitable foundation with a web museum. Discover our collections and support our cause. Together, we can make a difference.
                </p>
                <a href="#cta" className="btn btn--full margin-right-sm">Start helping now</a>

                <a href="#how" className="btn btn--outline">Learn more &darr;</a>

            </div>
            <div className="hero-img-box">

                <img src={HandsImg} alt='two hand ' />

            </div>
        </div>
    </section>);
}
