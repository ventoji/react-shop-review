import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({price})=>{
    const priceForStripe = price *100;
    const publishableKey = process.env.REACT_APP_PUBLISH_KEY;
    
   const onToken = token => {
    //   console.log(token);
    //   alert('Payment Successful')
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token
            }
        }).then(response => {
            alert('Payment sucessuful');
        }).catch(error => {
            console.log('Payment error: ', JSON.parse(error));
        })
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