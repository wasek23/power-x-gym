import React from 'react';
import { WebsiteName } from '../../App';
import HeroPage from '../Hero/HeroPage';
import pricingPlanData from '../../PostData/pricingPlanData';
import PricePlan from '../Posts/PricePlan';

const Pricing = () => {
    document.title = "Pricing Plans | " + WebsiteName;

    return (
        <>
            <HeroPage title="Pricing Plans"></HeroPage>

            <main>
                {pricingPlanData.length !== 0 && <section className="pricing">
                    <div className="sectionTop">
                        <h2 className="headingSecondary"><span className="primaryColor">Choose the offer</span> that suits you</h2>
                        <p>Facere mollitia similique commodi officia distinctio corrupti animi laborum amet doloremque iste et, aliquid.</p>
                    </div>

                    <div className="pricingPlans container grid3">
                        {pricingPlanData.map(plan => <PricePlan pricingPlanData={plan} key={plan.id}></PricePlan>)}
                    </div> {/* Pricing Plans */}
                </section>}
            </main>
        </>
    );
};

export default Pricing;