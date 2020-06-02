import React from 'react';

const HeroPage = (props) => {
    return (
        <section className="heroGlobalBox">
            <h1 className="headingPrimary globalHeadingPrimary">{props.title}</h1>
        </section>
    );
};

export default HeroPage;