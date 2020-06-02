import React from 'react';
import { WebsiteName } from '../../App';
import HeroPage from '../Hero/HeroPage';

const GymMembership = () => {
    document.title = "Your Gym Membership | " + WebsiteName;

    return (
        <>
            <HeroPage title="Your Gym Membership"></HeroPage>

            <main>

            </main>
        </>
    );
};

export default GymMembership;