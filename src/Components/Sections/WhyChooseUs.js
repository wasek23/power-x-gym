import React from 'react';

import BodyIcon from '../../img/icon/body.png';
import CycleIcon from '../../img/icon/cycle.png';
import GiftIcon from '../../img/icon/gift.png';

const WhyChooseUs = () => {
    return (
        <section className="whyChooseUs" id="whyChooseUs">
            <h2><span className="primaryColor">Why</span> Choose Us</h2>

            <div className="container grid3">
                <div className="card">
                    <img src={BodyIcon} alt="Icon" />
                    <h3>Free Fitness Training</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod rem quibusdam cupiditate a illo soluta cum eius repudiandae saepe, in iste iusto et id nulla.</p>
                </div>

                <div className="card">
                    <img src={CycleIcon} alt="Icon" />
                    <h3>Tons of Cardio &amp; Strength</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod rem quibusdam cupiditate a illo soluta cum eius repudiandae saepe, in iste iusto et id nulla.</p>
                </div>

                <div className="card">
                    <img src={GiftIcon} alt="Icon" />
                    <h3>No Commitment Membership</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod rem quibusdam cupiditate a illo soluta cum eius repudiandae saepe, in iste iusto et id nulla.</p>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;