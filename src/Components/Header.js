import React from 'react';
import $ from 'jquery';
import { NavLink, Link } from 'react-router-dom';

import classesData from '../PostData/classesData';
import pricingPlanData from '../PostData/pricingPlanData';

const Header = () => {
    //Sticky Navigation
    $(window).on("scroll", () => { $(window).scrollTop() >= 50 ? $(".sticky").addClass("stickyAdd") : $(".sticky").removeClass("stickyAdd") });

    return (
        <header id="header" className="sticky">
            {/* Navbar */}
            <nav className="navbar">
                <div className="container">
                    <Link to="/" className="logo">Power <span className="primaryColor">X</span></Link>

                    <input type="checkbox" className="navbarCheckbox" id="navToggle" />
                    <label htmlFor="navToggle" className="navbarButton"><span className="navbarIcons">&nbsp;</span></label>

                    <ul className="navbarMenu">
                        <li><NavLink exact activeClassName='active' to="/">Home</NavLink></li>

                        <li><NavLink exact to="/services">Services</NavLink></li>

                        {classesData.length !== 0 && <li><NavLink exact to="/our-classes">Our Classes</NavLink></li>}

                        <li><NavLink exact to="/about-us">About Us</NavLink></li>

                        {pricingPlanData.length !== 0 && <li><NavLink exact to="/pricing">Pricing</NavLink></li>}
                    </ul> {/* Navbar Menu */}
                </div> {/* Container */}
            </nav> {/* Navbar */}
        </header> // Header
    );
};

export default Header;