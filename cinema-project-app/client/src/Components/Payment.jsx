import React, { useEffect, useState } from "react";

import {

    PaymentElement,

    useStripe,

    useElements

} from "@stripe/react-stripe-js";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader, NavbarToggler } from 'reactstrap'
import axios from "axios";

const Payment = ({ booking, setBooking, setPayments, setConfirmation }) => {
    const stripe = useStripe();

    const elements = useElements();

    const [modal, setModal] = useState(false);
    const toggle = () => {
        if (modal) {
            const bookingObject = {
                showingId: "",
                bookingRef: 0,
                bookingDate: "",
                showingDate: "",
                showingTime: "",
                name: "",
                seats: [],
                children: 0,
                adults: 0,
                movieTitle: "",
                screen: "",
                total: 0
            };
            setBooking(bookingObject); setConfirmation(false); setPayments(false); setIsLoading(false);
        }
        setModal(!modal)
    };

    const [message, setMessage] = useState(null);

    const [isLoading, setIsLoading] = useState(false);


    useEffect(() => {

        if (!stripe) {

            return;

        }


        const clientSecret = new URLSearchParams(window.location.search).get(

            "payment_intent_client_secret"

        );


        if (!clientSecret) {

            return;

        }


        stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {

            switch (paymentIntent.status) {

                case "succeeded":

                    setMessage("Payment succeeded!");
                    axios.post('http://localhost:3001/bookings/create', booking).then((data) => {
                        console.log(data.data);
                    })

                    break;

                case "processing":

                    setMessage("Your payment is processing.");

                    break;

                case "requires_payment_method":

                    setMessage("Your payment was not successful, please try again.");

                    break;

                default:

                    setMessage("Something went wrong.");

                    break;

            }

        });

    }, [stripe]);


    const handleSubmit = async (e) => {
        axios.post('http://localhost:3001/bookings/create', booking).then((data) => {
            console.log(data.data);
        })
        e.preventDefault();


        if (!stripe || !elements) {

            // Stripe.js has not yet loaded.

            // Make sure to disable form submission until Stripe.js has loaded.

            return;

        }

        setIsLoading(true);


        const { error } = await stripe.confirmPayment({

            elements,

            confirmParams: {

                // Make sure to change this to your payment completion page

                return_url: "http://localhost:3000",

            },

        });


        // This point will only be reached if there is an immediate error when

        // confirming the payment. Otherwise, your customer will be redirected to

        // your `return_url`. For some payment methods like iDEAL, your customer will

        // be redirected to an intermediate site first to authorize the payment, then

        // redirected to the `return_url`.

        // if (error.type === "card_error" || error.type === "validation_error") {

        //     setMessage(error.message);

        // } else {

        //     setMessage("An unexpected error occured.");

        // }


        toggle();


    };


    return (
        <div>
            <form id="payment-form" onSubmit={handleSubmit}>

                <PaymentElement id="payment-element" />

                <Button disabled={isLoading || !stripe || !elements} id="submit" style={{ marginTop: "5%" }}>

                    <span id="button-text">

                        {isLoading ? <div className="spinner" id="spinner"></div> : "Pay now"}

                    </span>

                </Button>

                {/* Show any error or success messages */}

                {message && <div id="payment-message">{message}</div>}

            </form>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>
                    Payment Confirmation
                </ModalHeader>
                <ModalBody>
                    Payment has been successfully processed
                </ModalBody>
                <ModalFooter>
                    <Button onClick={() => { toggle(); }}>Back</Button>
                </ModalFooter>
            </Modal>
        </div>

    );
};

export default Payment;