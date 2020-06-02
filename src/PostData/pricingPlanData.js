import React from 'react';

import Thumb1 from './img/pricing-plan/1.jpg';
import Thumb2 from './img/pricing-plan/2.jpg';
import Thumb3 from './img/pricing-plan/3.jpg';

const pricingPlanData = [
    // { id: 0, thumb: Thumb, billType: "Billed Monthly", title: "Plan", price: 99, content: "Content" }
    {
        id: 3, thumb: Thumb3, billType: "Billed Monthly", title: "Advance Plan", price: 140, content: <>
            <ul>
                <li>Mobile-Optimized</li>
                <li>Best Hosting</li>
                <li>Free Custom</li>
                <li>Outstanding</li>
                <li>Happy Customers</li>
                <li>Extra</li>
            </ul>
        </>
    },

    {
        id: 2, thumb: Thumb2, billType: "Billed Monthly", title: "Basic Plan", price: 120, content: <>
            <ul>
                <li>Mobile-Optimized</li>
                <li>Best Hosting</li>
                <li>Free Custom</li>
                <li>Outstanding</li>
                <li>Happy Customers</li>
            </ul>
        </>
    },

    {
        id: 1, thumb: Thumb1, billType: "Billed Monthly", title: "Beginners", price: 90, content: <>
            <ul>
                <li>Mobile-Optimized</li>
                <li>Best Hosting</li>
                <li>Free Custom</li>
                <li>Outstanding</li>
            </ul>
        </>
    }
];
export default pricingPlanData;