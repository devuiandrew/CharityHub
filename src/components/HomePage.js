import React from 'react';
import HandsImg from '../images/MainPagePhoto.png'

export default function HomePage() {
    return (<section class="section-hero card-box-shadow">
        <div class="hero">
            <div class="hero-text-box">
                <h1 class="heading-primary heading-white">
                    Welcome to Charity Hub
                </h1>
                <p class="hero-description">
                    We are a charitable foundation with a web museum. Discover our collections and support our cause. Together, we can make a difference.
                </p>
                <a href="#cta" class="btn btn--full margin-right-sm">Start helping now</a>

                <a href="#how" class="btn btn--outline">Learn more &darr;</a>

            </div>
            <div class="hero-img-box">

                <img src={HandsImg} alt='two hand ' />

            </div>
        </div>
    </section>);
}
