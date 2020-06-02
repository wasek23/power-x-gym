import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const todayYear = new Date().getFullYear();

    return (
        <footer>
            <div className="container">
                <div><Link to="/" className="logo">Power <span className="primaryColor">X</span></Link></div>

                <div>
                    <h5>Need Help?</h5>
                    <ul>
                        <li><a href="/">Help Center</a></li>
                        <li><a href="/">Email Support</a></li>
                        <li><a href="/">Live Chat</a></li>
                        <li><a href="/">Gift Certificates</a></li>
                        <li><a href="/">Send Us Feedback</a></li>
                    </ul>
                </div>

                <div>
                    <h5>Digitals Resources</h5>
                    <ul>
                        <li><a href="/">Articles</a></li>
                        <li><a href="/">E-books</a></li>
                    </ul>
                </div>

                <div>
                    <h5>Contact with Us</h5>

                    <ul>
                        <li><a href="/">Forum</a></li>
                    </ul>
                </div>

                <div>
                    <h5>Join Our Newsletter</h5>

                    <p>Get exclusive news, features, and updates from The Shredder Weight Loss Academy</p>
                </div>
            </div>

            <p className="copyright">&copy; {todayYear} <a href="https://wasek-bellah.web.app/" className="footerLink" target="_blank" rel="noopener noreferrer">Wasek Bellah</a>. All Right Reserved.</p>
        </footer>
    );
};
export default Footer;