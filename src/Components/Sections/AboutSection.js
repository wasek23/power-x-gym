import React from 'react';

import AboutLeft from '../../img/about-left.jpg';

const AboutSection = () => {
    return (
        <section className="aboutUs" id="aboutUs">
            <div className="container grid2">
                <div className="left">
                    <img src={AboutLeft} alt="About Left" />
                </div>
                <div className="right">
                    <div className="verticalLine">
                        <h2><span className="primaryColor">We are Here to Dream!</span><br /> Our Team is Here to Serve You.</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur, sequi cupiditate in vitae ducimus officia, aut ut sapiente nostrum quasi explicabo modi omnis aperiam assumenda architecto maxime quis impedit quaerat! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam, voluptatem! Quia reprehenderit beatae velit, incidunt fugit illo unde praesentium laborum corporis! Voluptate impedit sint perferendis! Ratione necessitatibus autem qui ad.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;