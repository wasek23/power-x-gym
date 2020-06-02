import React from 'react';
import { WebsiteName } from '../../App';
import HeroPage from '../Hero/HeroPage';

const Classes = () => {
    document.title = "Our Classes | " + WebsiteName;

    return (
        <>
            <HeroPage title="Our Classes"></HeroPage>

            <main>

            </main>
        </>
    );
};

export default Classes;