import React from 'react';
import { WebsiteName, WebsiteSlogan } from '../../App';
import HeroHome from '../Hero/HeroHome';

const Home = () => {
    document.title = WebsiteName + " | " + WebsiteSlogan;

    return (
        <>
            <HeroHome></HeroHome>

            <main>

            </main>
        </>
    );
};

export default Home;