import React from "react";
import StripeCheckout from "react-stripe-checkout";

type StripeButtonProps = {
  price: number;
}

const StripeButton = ({ price }: StripeButtonProps) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51KHhcRIkwGvfmDOcjdbHqUXK0PiH4tTOBGoeEfRAtGd2sEBYMpquBsZXZpiE2tZzYvHgGsDJNnhBowZoiEHcrLls00kNaBjHti";

  const onToken = (token) => {
    console.log(token);
    alert("payment successful");
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="Ecommerce React"
      billingAddress
      shippingAddress
      description={`Your total is$${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      image="https://i1.wp.com/www.csscodelab.com/wp-content/uploads/2019/12/css-responsive-react-logo-design-animation.png?fit=999%2C631&ssl=1"
      stripeKey={publishableKey}
    />
  );
};
export default StripeButton;
