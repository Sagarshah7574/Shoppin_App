import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Button } from "react-bootstrap";






let stripePromise;

const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);
  }

  return stripePromise;
};

const Pay = () => {
  const [stripeError, setStripeError] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const item = {
    price: "price_1LX0TDSBiPKS1PeQpI1K0Pnt",
    quantity: 1
  };

  const checkoutOptions = {
    lineItems: [item],
    mode: "payment",
    successUrl: `${window.location.origin}/success`,
    cancelUrl: `${window.location.origin}/cancel`
  };

  const redirectToCheckout = async () => {
    setLoading(true);
    console.log("redirectToCheckout");

    const stripe = await getStripe();
    const { error } = await stripe.redirectToCheckout(checkoutOptions);
    console.log("Stripe checkout error", error);

    if (error) setStripeError(error.message);
    setLoading(false);
  };

  if (stripeError) alert(stripeError);

  return (
    // <div className="checkout">
    //   <h1>Stripe Checkout</h1>
    //   <p className="checkout-title">Design+Code React Hooks Course</p>
    //   <p className="checkout-description">
    //     Learn how to build a website with React Hooks
    //   </p>
    //   <h1 className="checkout-price">$19</h1>
     
      <div
        className="checkout-button"
        onClick={redirectToCheckout}
        disabled={isLoading}
      >
        <div className="grey-circle">
          <div className="purple-circle">
            
          </div>
        </div>
        <div className="text-container">
          <Button variant="dark" size="lg">{isLoading ? "Loading..." : "Ready to pay"}</Button>
        </div>
      </div>
    
  );
};

export default Pay;
