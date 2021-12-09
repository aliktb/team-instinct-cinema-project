import React from "react";
import {
  Elements,
  useStripe,
  useElements,
  CardElement,
} from "@stripe/react-stripe-js";

const CheckoutForm = (props) => {
  const stripe = useStripe();
  const elements = useElements();

  const handleStripe = async (event) => {
    event.preventDefault();
    console.log("event", event);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });
    // do something with error or paymentMethod?
  };

  return (
    <button onClick={handleStripe}>
      <span>Checkout</span>
    </button>
  );
};

export default CheckoutForm;
