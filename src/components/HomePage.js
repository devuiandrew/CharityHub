import { useEffect } from 'react';
import HandsImg from '../images/MainPagePhoto.png'

export default function HomePage() {
    // Sticky navigation

    useEffect(() => {
        const sectionHeroEl = document.querySelector('.section-hero');

        const obs = new IntersectionObserver(
            function (entries) {
                const ent = entries[0];

                if (ent.isIntersecting === false) {
                    document.body.classList.add('sticky');
                }

                if (ent.isIntersecting === true) {
                    document.body.classList.remove('sticky');
                }
            },
            {
                root: null,
                threshold: 0,
                rootMargin: '-80px',
            }
        );

        if (sectionHeroEl) {
            obs.observe(sectionHeroEl);
        }

        return () => {
            if (sectionHeroEl) {
                obs.unobserve(sectionHeroEl);
            }
        };
    }, []);

    return (<section className="section-hero card-box-shadow">
        <div className="hero">
            <div className="hero-text-box">
                <h1 className="heading-primary heading-white">
                    Welcome to Charity Hub
                </h1>
                <p className="hero-description">
                    We are a charitable foundation with a web museum. Discover our collections and support our cause. Together, we can make a difference.
                </p>
                <a href="#donation" className="btn btn--full margin-right-sm">Start helping now</a>

                <a href="#how" className="btn btn--outline">Learn more &darr;</a>

            </div>
            <div className="hero-img-box">

                <img src={HandsImg} alt='two hand' />

            </div>
        </div>
    </section>);
}
