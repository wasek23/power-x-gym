import React from 'react';
import { CardExpiryElement, CardNumberElement, CardCvcElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useState } from 'react';

const CheckoutForm = (props) => {
    const [paymentError, setPaymentError] = useState(null);
    const [paymentSuccess, setPaymentSuccess] = useState(null);

    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardNumberElement, CardExpiryElement, CardCvcElement),
        });

        if (error) {
            setPaymentError(error.message);
            setPaymentSuccess(null);
        } else {
            setPaymentSuccess(paymentMethod);
            const payment = { id: paymentMethod.id, last4: paymentMethod.card.last4 }
            props.handleMembership(payment);
            setPaymentError(null);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>Card Number</label>
            <CardNumberElement />

            <label>Expire Date</label>
            <CardExpiryElement />

            <label>CVC Code</label>
            <CardCvcElement />

            <button className="btn" type="submit" disabled={!stripe}>Pay</button>
            {
                paymentError && <p style={{ color: "red", textAlign: "center", marginTop: "20px" }}>{paymentError}</p>
            }
            {
                paymentSuccess && <p style={{ color: "green", textAlign: "center", marginTop: "20px" }}>Payment Successful</p>
            }
        </form>
    );
};
export default CheckoutForm;