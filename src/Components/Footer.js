import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            <h1>Footer</h1>
            <Link to="/" className="Logo">Power <span className="primaryColor">X</span></Link>
        </footer>
    );
};
export default Footer;