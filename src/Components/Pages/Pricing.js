import React from 'react';
import { WebsiteName } from '../../App';
import HeroPage from '../Hero/HeroPage';

const Pricing = () => {
    document.title = "Pricing Plans | " + WebsiteName;

    return (
        <>
            <HeroPage title="Pricing Plans"></HeroPage>

            <main>

            </main>
        </>
    );
};

export default Pricing;