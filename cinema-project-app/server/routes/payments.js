const express = require('express');
const router = express.Router();

const stripe = require('stripe')('sk_test_51K4meeA1FgqwOtqeybsVtcFntFrvKEn2sLavTRxQWrYPwUY53N7JiC40ew9kIwY5KDMnXLPMa02rJAKqgkbf1uLV00cfb7gMHs');

const calculateCost = (booking) => {
    console.log(booking);
    return booking.total;
}

router.post("/create-payment-intent", async (req, res) => {

    const { booking } = req.body;


    // Create a PaymentIntent with the order amount and currency

    const paymentIntent = await stripe.paymentIntents.create({

        amount: booking.total * 100,

        currency: "gbp",

        payment_method_types: ['card']

        // automatic_payment_methods: {

        //     enabled: true,

        // },

    });


    res.send({

        clientSecret: paymentIntent.client_secret,

    });

});

module.exports = router;