import React from 'react';
import { WebsiteName } from '../../App';
import HeroPage from '../Hero/HeroPage';
import PlanBG1 from '../../img/pricing-plan/1.jpg';
import PlanBG2 from '../../img/pricing-plan/2.jpg';
import PlanBG3 from '../../img/pricing-plan/3.jpg';

const Pricing = () => {
    document.title = "Pricing Plans | " + WebsiteName;

    return (
        <>
            <HeroPage title="Pricing Plans"></HeroPage>

            <main>
                <section className="pricing">
                    <div className="sectionTop">
                        <h2 className="headingSecondary"><span className="primaryColor">Choose the offer</span> that suits you</h2>
                        <p>Facere mollitia similique commodi officia distinctio corrupti animi laborum amet doloremque iste et, aliquid.</p>
                    </div>

                    <div className="pricingPlans container">
                        <div className="singlePlan" style={{ backgroundImage: "linear-gradient(to right, rgba(23, 20, 38, 0.7), rgba(23, 20, 38, 0.7)), url(" + PlanBG1 + ")" }}>

                            <h4 className="primaryColor">Billed Monthly</h4>
                            <h2>Advance Plan</h2>
                            <h1 className="primaryColor">$140</h1>

                            <ul>
                                <li>Mobile-Optimized</li>
                                <li>Best Hosting</li>
                                <li>Free Custom</li>
                                <li>Outstanding</li>
                                <li>Happy Customers</li>
                                <li>Extra</li>
                            </ul>

                            <div className="cta">
                                <a href="/" className="btn">Purchase</a>
                            </div>
                        </div> {/* Single Plan */}

                        <div className="singlePlan" style={{ backgroundImage: "linear-gradient(to right, rgba(23, 20, 38, 0.7), rgba(23, 20, 38, 0.7)), url(" + PlanBG2 + ")" }}>

                            <h4 className="primaryColor">Billed Monthly</h4>
                            <h2>Basic Plan</h2>
                            <h1 className="primaryColor">$120</h1>

                            <ul>
                                <li>Mobile-Optimized</li>
                                <li>Best Hosting</li>
                                <li>Free Custom</li>
                                <li>Outstanding</li>
                                <li>Happy Customers</li>
                            </ul>

                            <div className="cta">
                                <a href="/" className="btn">Purchase</a>
                            </div>
                        </div> {/* Single Plan */}

                        <div className="singlePlan" style={{ backgroundImage: "linear-gradient(to right, rgba(23, 20, 38, 0.7), rgba(23, 20, 38, 0.7)), url(" + PlanBG3 + ")" }}>

                            <h4 className="primaryColor">Billed Monthly</h4>
                            <h2>Beginners</h2>
                            <h1 className="primaryColor">$90</h1>

                            <ul>
                                <li>Mobile-Optimized</li>
                                <li>Best Hosting</li>
                                <li>Free Custom</li>
                                <li>Outstanding</li>
                            </ul>

                            <div className="cta">
                                <a href="/" className="btn">Purchase</a>
                            </div>
                        </div> {/* Single Plan */}
                    </div> {/* Pricing Plans */}
                </section>
            </main>
        </>
    );
};

export default Pricing;