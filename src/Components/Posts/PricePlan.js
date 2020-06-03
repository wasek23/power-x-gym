import React from 'react';
import { Link } from 'react-router-dom';

const PricePlan = props => {
    const { thumb, billType, title, price, content } = props.pricingPlanData;

    return (
        <div className="singlePlan" style={{ backgroundImage: "linear-gradient(to right, rgba(23, 20, 38, 0.7), rgba(23, 20, 38, 0.7)), url(" + thumb + ")" }}>

            <h4 className="primaryColor">{billType}</h4>
            <h2>{title}</h2>
            <h1 className="primaryColor">${price}</h1>

            {content}

            <div className="cta">
                <Link to="/gym-membership" className="btn">Purchase</Link>
            </div>
        </div>
    );
};

export default PricePlan;