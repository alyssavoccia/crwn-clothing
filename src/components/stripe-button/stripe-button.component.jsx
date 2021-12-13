import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51K6LX2AVkJVaRJy7sBcEzfiMIVxZ21psyOS9o2jUs80mVKjb43EpEBBXhmyiciF3ZyPY6ss36u2Iud7GaBeKP1Ck00DXjTpAYA';

  const onToken = token => {
    alert('Payment Successful!');
  }

  return (
    <StripeCheckout 
      label="Pay Now" 
      name="CRWN Clothing Ltd." 
      billingAddress 
      shippingAddress 
      image='https://svgshare.com/i/CUz.svg' 
      description={`Your total is $${price}`} 
      amount={priceForStripe} 
      panelLabel='Pay Now' 
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;