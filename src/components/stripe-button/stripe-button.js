import React from 'react';
import StripeCheckout from 'react-stripe-checkout';


const StripeCheckoutButton = ({price})=>{
    const priceForStripe = price *100;
    const publishableKey = 'pk_test_ekQWv2wLFlXhB2gVlP7aSM7v00Yug7AQmq';
    
   const onToken = token => {
       console.log(token);
       alert('Payment Successful')
   }

    return (
        <StripeCheckout  
            label='Pay Now'
            name="CRWN Clothing Ltd." 
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Ypur total is $${price}`}
            amount={priceForStripe}
            panelLabel= ' Pay Now'
            token={onToken}
            stripeKey = {publishableKey}
            />
    );
};

export default StripeCheckoutButton;