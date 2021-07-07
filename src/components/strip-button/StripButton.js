import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripButton = ({price}) => {
    const priceForStrip = price * 100
    const publishableKey ='pk_test_51JATGXSC0bl1VhjERvUHqb3yzZ5Q1em0RvVpfFuQFuKEfCeZxrCO3B47ibN6vSRMvoJo69DCLdZE0EvaZsljJ3qp00XLvq2H0V'
    const onToken = token =>{
        console.log(token)
        alert('Payment Succssful')
    }
    return (
        <StripeCheckout
            label ='Pay Now'
            name= 'CROWN Clothing Ltd.'
            billingAddress
            shippingAddress
            
            description = {` Your Total is $${price}`}
            amount={priceForStrip}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
            
        />
            
        
    )
}

export default StripButton
