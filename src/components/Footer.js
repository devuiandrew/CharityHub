import logo_2 from '../images/logo-2.png'

export function Footer() {
    return (<footer className="footer" id="ctu">
        <div className="container grid grid--footer">
            <div className="logo-col">
                <a href="#" className="footer-logo">
                    <img className="logo" alt="Omnifood logo" src={logo_2} />
                </a>

                <ul className="social-links">
                    <li>
                        <a className="footer-link" href="#"><ion-icon className="social-icon" name="logo-instagram"></ion-icon></a>
                    </li>
                    <li>
                        <a className="footer-link" href="#"><ion-icon className="social-icon" name="logo-facebook"></ion-icon></a>
                    </li>
                    <li>
                        <a className="footer-link" href="#"><ion-icon className="social-icon" name="logo-twitter"></ion-icon></a>
                    </li>
                </ul>
                <p className="copyright">
                    Copyright © <span className="year">2023</span> by Charity Hub.
                </p>

            </div>

            <div className="address-col">
                <p className="footer-heading">Contact us</p>
                <address className="contacts">
                    <p className="address">
                        623 Harrison St., 2nd Floor, San Francisco, CA 94107
                    </p>
                    <p>
                        <a className="footer-link" href="tel:415-201-6370">415-201-6370</a><br />
                        <a className="footer-link" href="mailto:hello@omnifood.com">hello@charity.com</a>
                    </p>
                </address>
            </div>

            <nav className="nav-col">
                <p className="footer-heading">Account</p>
                <ul className="footer-nav">
                    <li><a className="footer-link" href="#">Create account</a></li>
                    <li><a className="footer-link" href="#">Sign in</a></li>
                    <li><a className="footer-link" href="#">iOS app</a></li>
                    <li><a className="footer-link" href="#">Android app</a></li>
                </ul>
            </nav>

            <nav className="nav-col">
                <p className="footer-heading">Company</p>
                <ul className="footer-nav">
                    <li><a className="footer-link" href="#">About Charity Hub</a></li>
                    <li><a className="footer-link" href="#">For Business</a></li>
                    <li><a className="footer-link" href="#">Careers</a></li>
                </ul>
            </nav>

            <nav className="nav-col">
                <p className="footer-heading">Resources</p>
                <ul className="footer-nav">
                    <li><a className="footer-link" href="#">Help center</a></li>
                    <li><a className="footer-link" href="#">Privacy & terms</a></li>
                </ul>
            </nav>
        </div>
    </footer>);
}
