import React from 'react';
import { Link } from 'react-router-dom';

const HeroHome = () => {
    return (
        <section className="heroHomeBox">
            <div className="container">
                <div className="left">
                    <h1 className="headingPrimary">The Best Fitness Studio in Town</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et cumque, nam harum, earum vitae qui sed odio accusantium quae, illum delectus facilis assumenda veniam. Deserunt laborum vitae doloremque nemo iure?</p>
                    <Link to="/pricing" className="btn btn-primary btnAnimated">Join Us</Link>
                </div> {/* Left */}

                <div className="right">
                    <div className="heroVideo">
                        <div className="backgroundX">
                            <div className="verticalLine">
                                <svg width="64px" height="64px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" style={{ backgroundColor: "#6b6b75", borderRadius: "50%", padding: "10px", cursor: "pointer" }}>
                                    <g fill="#fff" id="Group" transform="translate(-528.000000, -144.000000)"><path d="M543,152 L531,158 L531,146 L543,152 L543,152 Z M543,152" id="Shape" /></g>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div> {/* Right */}
            </div> {/* Container */}
        </section >
    );
};

export default HeroHome;