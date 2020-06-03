import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

import { WebsiteName } from '../../App';
import HeroPage from '../Hero/HeroPage';
import CheckoutForm from '../Sections/CheckoutForm';

import MasterCard from '../../img/credit-cards-mastercard.png';
import VisaCard from '../../img/credit-cards-visa.png';
import AmexCard from '../../img/credit-cards-amex.png';
import PayPal from '../../img/paypal.png';

const GymMembership = (payment) => {
    document.title = "Your Gym Membership | " + WebsiteName;

    const { register, handleSubmit, errors } = useForm();
    const [memberInfo, setMemberInfo] = useState(null);
    const [memberId, setMemberId] = useState(null);


    const stripePromise = loadStripe('pk_test_ogpAFB9j60e6B9wl0AVRWjQN00MXnETkOl');

    const onSubmit = data => {
        setMemberInfo(data);
        console.log(data);
    }

    const handleMembership = () => {
        const memberDetails = { member: memberInfo }

        fetch('https://r-power-x-gym.herokuapp.com/placeOrder', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(memberDetails)
        }).then(res => res.json()).then(order => {
            setMemberId(order._id);
        });
    }

    const cardPayHandle = () => {
        document.getElementById('stripeElements').style.display = 'block';
        document.getElementById('paypalElements').style.display = 'none';
        document.querySelector('.cardPay h5 span').classList.add('radioCircle');
        document.querySelector('.payPalPay h5 span').classList.remove('radioCircle');
    }
    const payPalPayHandle = () => {
        document.getElementById('stripeElements').style.display = 'none';
        document.getElementById('paypalElements').style.display = 'block';
        document.querySelector('.cardPay h5 span').classList.remove('radioCircle');
        document.querySelector('.payPalPay h5 span').classList.add('radioCircle');
    }

    return (
        <>
            <HeroPage title="Your Gym Membership"></HeroPage>

            <main className="membership">

                <div className="container">
                    <section className="progressBar">
                        <span className="primaryBG"><span>1</span></span>
                        <span className={memberInfo && "primaryBG"}><span>2</span></span>
                        <span className={memberId && "primaryBG"}><span>3</span></span>
                    </section>

                    <section style={{ display: memberInfo ? 'none' : 'block' }}>
                        <form onSubmit={handleSubmit(onSubmit)} className="memberForm">
                            <div>
                                <label htmlFor="firstName">First Name</label><br />
                                <input type="text" name="firstName" id="firstName" ref={register({ required: true })} />
                                {errors.firstName && <span className="error">First Name is required</span>}
                            </div>

                            <div>
                                <label htmlFor="lastName">Last Name</label><br />
                                <input type="text" name="lastName" id="lastName" ref={register({ required: true })} />
                                {errors.lastName && <span className="error">Last Name is required</span>}
                            </div>

                            <div>
                                <label htmlFor="email">Email</label><br />
                                <input type="email" name="email" id="email" ref={register({ required: true })} />
                                {errors.email && <span className="error">Email is required</span>}
                            </div>

                            <div>
                                <label htmlFor="phone">Mobile Number</label><br />
                                <input type="number" name="phone" id="phone" ref={register({ required: true })} />
                                {errors.phone && <span className="error">Mobile Number is required</span>}
                            </div>

                            <div>
                                <label htmlFor="birthday">Date of Birth</label><br />
                                <input type="date" name="birthday" id="birthday" ref={register({ required: true })} />
                                {errors.birthday && <span className="error">Date of Birth is required</span>}
                            </div>

                            <div>
                                <label htmlFor="gender">Gender</label><br />
                                <select name="gender" id="gender" ref={register({ required: true })} >
                                    <option value="" disabled selected>Select</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="others">Others</option>
                                </select>
                                {errors.gender && <span className="error">Gender is required</span>}
                            </div>

                            <div>
                                <label htmlFor="address">Address Line 1</label><br />
                                <input type="text" name="address" id="address" ref={register({ required: true })} />
                                {errors.address && <span className="error">Address Line 1 is required</span>}
                            </div>

                            <div>
                                <label htmlFor="country">Country/Region</label><br />
                                <input type="text" name="country" id="country" ref={register({ required: true })} />
                                {errors.country && <span className="error">Country/Region is required</span>}
                            </div>

                            <div>
                                <label htmlFor="city">City</label><br />
                                <input type="text" name="city" id="city" ref={register({ required: true })} />
                                {errors.city && <span className="error">City is required</span>}
                            </div>

                            <div>
                                <label htmlFor="postcode">Postcode</label><br />
                                <input type="number" name="postcode" id="postcode" ref={register({ required: true })} />
                                {errors.postcode && <span className="error">Postcode is required</span>}
                            </div>
                            <br />

                            <div>
                                <input className="btn btn-primary" type="submit" value="Next" />
                            </div>
                        </form >
                    </section>

                    {memberId === null && <section section className="payment" style={{ display: memberInfo ? 'block' : 'none', }}>
                        <div className="paymentSystem">
                            <div className="cardPay" onClick={cardPayHandle}>
                                <div>
                                    <h5><span className="radioCircle"></span>Credit Card</h5>
                                    <p>Safe mony transfer using your bank account .Visa, Maestro, Discover, American Express</p>
                                </div>

                                <div>
                                    <img src={MasterCard} alt="Master Card" />
                                    <img src={VisaCard} alt="Visa Card" />
                                    <img src={AmexCard} alt="Amex Card" />
                                </div>
                            </div>

                            <div id="stripeElements">
                                <Elements stripe={stripePromise}>
                                    <CheckoutForm handleMembership={handleMembership}></CheckoutForm>
                                </Elements>
                            </div>
                        </div>

                        <div className="paymentSystem">
                            <div className="payPalPay" onClick={payPalPayHandle}>
                                <div>
                                    <h5><span></span>PayPal</h5>
                                    <p>You will be redirect to PayPal website to complete your parches securely.</p>
                                </div>

                                <div>
                                    <img src={PayPal} alt="PayPal" />
                                </div>
                            </div>

                            <div id="paypalElements" style={{ display: 'none' }}>
                                <button className="btn">PayPal Payment Integration pending</button>
                            </div>
                        </div>
                    </section>}

                    {memberId && <section className="successMsg">
                        <h1>Thank You for <br /><span className="primaryColor">Joining to Our Gym</span></h1>
                        <p><strong>Your Member id is:</strong> {memberId}</p>
                    </section>}
                </div>

            </main>
        </>
    );
};

export default GymMembership;