import React from 'react';

import Thumb1 from '../../img/services/1.jpg';
import Thumb2 from '../../img/services/2.jpg';
import Thumb3 from '../../img/services/3.jpg';

import Progress from '../Icons/progress.svg';
import Dumbbell from '../Icons/dumbbell.svg';
import Vitamins from '../Icons/vitamins.svg';

const Services = () => {
    return (
        <section className="services" id="services">
            <div className="container grid3">
                <div className="card" style={{ backgroundImage: "linear-gradient(to right, rgba(23, 20, 38, 0.7), rgba(23, 20, 38, 0.7)), url(" + Thumb1 + ")" }}>
                    {Progress}
                    <h2>Progression</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod rem quibusdam cupiditate a illo soluta cum eius repudiandae saepe, in iste iusto et id nulla.</p>
                </div>

                <div className="card" style={{ backgroundImage: "linear-gradient(to right, rgba(23, 20, 38, 0.7), rgba(23, 20, 38, 0.7)), url(" + Thumb2 + ")" }}>
                    {Dumbbell}
                    <h2>Workout</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod rem quibusdam cupiditate a illo soluta cum eius repudiandae saepe, in iste iusto et id nulla.</p>
                </div>

                <div className="card" style={{ backgroundImage: "linear-gradient(to right, rgba(23, 20, 38, 0.7), rgba(23, 20, 38, 0.7)), url(" + Thumb3 + ")" }}>
                    {Vitamins}
                    <h2>Nutrition</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod rem quibusdam cupiditate a illo soluta cum eius repudiandae saepe, in iste iusto et id nulla.</p>
                </div>
            </div>
        </section>
    );
};

export default Services;