import logo_2 from '../images/logo-2.png'

export function Footer() {
    return (<footer className="footer" id="ctu">
        <div className="container grid grid--footer">
            <div className="logo-col">
                <a href="#root" className="footer-logo">
                    <img className="logo" alt="Charity Hub logo" src={logo_2} />
                </a>

                <p className="copyright">
                    Copyright © {new Date().getFullYear()} by Charity Hub.
                </p>
            </div>

            <div className="address-col">
                <p className="footer-heading">Contact us</p>
                <address className="contacts">
                    <p className="address">
                        123 Example Street, Springfield
                    </p>
                    <p>
                        <a className="footer-link" href="tel:000-000-0000">000-000-0000</a><br />
                        <a className="footer-link" href="mailto:hello@charity.example">hello@charity.example</a>
                    </p>
                </address>
            </div>

            <nav className="nav-col">
                <p className="footer-heading">Navigation</p>
                <ul className="footer-nav">
                    <li><a className="footer-link" href="#vision">About Charity Hub</a></li>
                    <li><a className="footer-link" href="#how">The Power of Giving</a></li>
                    <li><a className="footer-link" href="#collection">Our Collection</a></li>
                    <li><a className="footer-link" href="#donation">Ways to Support</a></li>
                </ul>
            </nav>
        </div>
    </footer>);
}
