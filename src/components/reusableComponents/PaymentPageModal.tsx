/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect } from 'react';


import { useCreatePaymentIntentMutation } from '@/redux/features/payment/paymentApi';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const PaymentPageModal = ({setIfPayStripe,totalAmount}:any) => {
  const stripe = useStripe();
  const elements = useElements();

  const [createPaymentIntent, { data: clientSecret, isLoading, error }] = useCreatePaymentIntentMutation();


  console.log(clientSecret?.clientSecret);
  

  useEffect(() => {
    createPaymentIntent(totalAmount); // Replace with dynamic amount
  }, [totalAmount]);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();



    if (!stripe || !elements) {
      return;
    }

    if (!clientSecret?.clientSecret) {
      return;
    }

    const { error: stripeError, paymentIntent } = await stripe.confirmCardPayment(clientSecret?.clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement)!,
      },
    });

    if (stripeError) {
      console.error(stripeError.message);
      return;
    }

    alert("payment Success")
    console.log('Payment successful:', paymentIntent);
  };

  return (
    <div className="fixed   inset-0 z-50 bg-primary/20  items-center justify-center  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" >
<div className='bg-white/95 relative top-1/3  rounded-2xl mx-auto max-w-xl'>
<form   onSubmit={handleSubmit}>
      <div className='text-black p-10 space-y-3 text-center'>
        
      <h3 className='text-2xl font-bold pb-2'>  Pay with stripe</h3>
      <CardElement className='border px-3 py-2' />
    <div className='flex justify-center py-2 gap-4'>
    <button className='bg-primary text-black rounded-md p-2 px-2' onClick={()=>setIfPayStripe(false)} >Cancel</button>
      <button className='bg-primary text-black rounded-md p-2 px-2' type="submit" disabled={!stripe || isLoading}>
        {isLoading ? 'Processing...' : 'Pay Now'}
      </button>
    </div>
      {error && <div>{error.toString()}</div>}
      </div>
    </form>
</div>
    </div>

  );
};

export default PaymentPageModal;
