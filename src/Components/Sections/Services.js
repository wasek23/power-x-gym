import React from 'react';

import Thumb1 from '../../img/services/1.jpg';
import Thumb2 from '../../img/services/2.jpg';
import Thumb3 from '../../img/services/3.jpg';

import ProgressWhite from '../../img/icon/progress-white.png';
import DumbbellYellow from '../../img/icon/dumbbell-yellow.png';
import MedicineWhite from '../../img/icon/medicine-white.png';

const Services = () => {
    return (
        <section className="services">
            <div className="container">
                <div className="card" style={{ backgroundImage: "linear-gradient(to right, rgba(23, 20, 38, 0.7), rgba(23, 20, 38, 0.7)), url(" + Thumb1 + ")" }}>
                    <img src={ProgressWhite} alt="Icon" />
                    <h2>Progression</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod rem quibusdam cupiditate a illo soluta cum eius repudiandae saepe, in iste iusto et id nulla.</p>
                </div>

                <div className="card" style={{ backgroundImage: "linear-gradient(to right, rgba(23, 20, 38, 0.7), rgba(23, 20, 38, 0.7)), url(" + Thumb2 + ")" }}>
                    <img src={DumbbellYellow} alt="Icon" />
                    <h2>Workout</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod rem quibusdam cupiditate a illo soluta cum eius repudiandae saepe, in iste iusto et id nulla.</p>
                </div>

                <div className="card" style={{ backgroundImage: "linear-gradient(to right, rgba(23, 20, 38, 0.7), rgba(23, 20, 38, 0.7)), url(" + Thumb3 + ")" }}>
                    <img src={MedicineWhite} alt="Icon" />
                    <h2>Nutrition</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod rem quibusdam cupiditate a illo soluta cum eius repudiandae saepe, in iste iusto et id nulla.</p>
                </div>
            </div>
        </section>
    );
};

export default Services;