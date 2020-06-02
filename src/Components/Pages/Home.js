import React from 'react';
import { WebsiteName, WebsiteSlogan } from '../../App';
import HeroHome from '../Hero/HeroHome';
import TrainingPrograms from '../Sections/TrainingPrograms';
import WhyChooseUs from '../Sections/WhyChooseUs';
import AboutSection from '../Sections/AboutSection';
import Services from '../Sections/Services';

const Home = () => {
    document.title = WebsiteName + " | " + WebsiteSlogan;

    return (
        <>
            <HeroHome></HeroHome>

            <main>
                <Services></Services>
                <AboutSection></AboutSection>
                <TrainingPrograms></TrainingPrograms>
                <WhyChooseUs></WhyChooseUs>
            </main>
        </>
    );
};

export default Home;