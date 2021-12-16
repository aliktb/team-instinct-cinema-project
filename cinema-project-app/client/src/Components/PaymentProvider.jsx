import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useEffect, useState } from 'react';
import Payment from './Payment';

const PaymentProvider = ({ booking, setBooking, setPayments, setConfirmation }) => {

    const [clientSecret, setClientSecret] = useState("");

    const stripePromise = loadStripe(

        'pk_test_51K4meeA1FgqwOtqeXbVgZ4cClXc8WWXcLXHsvZClvjM0BEGXlESLfQUrwzhGtdhFzFUxx05CHMWADPBnAfY8bMDj00KaitBrJx'
    );




    useEffect(() => {

        // Create PaymentIntent as soon as the page loads

        fetch("http://localhost:3001/payments/create-payment-intent", {

            method: "POST",

            headers: { "Content-Type": "application/json" },

            body: JSON.stringify({ booking }),

        })

            .then((res) => res.json())

            .then((data) => setClientSecret(data.clientSecret));

    }, []);


    const appearance = {

        theme: 'stripe',

    };

    const options = {

        clientSecret,

        appearance,

    };

    return (

        <div className="App">

            {clientSecret && (

                <Elements options={options} stripe={stripePromise}>

                    <Payment booking={booking} setBooking={setBooking} setPayments={setPayments} setConfirmation={setConfirmation} />

                </Elements>

            )}

        </div>

    );


}

export default PaymentProvider;