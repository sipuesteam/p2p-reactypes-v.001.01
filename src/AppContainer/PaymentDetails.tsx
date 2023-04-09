import React from 'react';
import { Typography } from '@material-ui/core';
import { Payment } from './types';

interface PaymentDetailsProps {
  payment: Payment;
}

function PaymentDetails({ payment }: PaymentDetailsProps) {
  return (
    <div>
      <Typography variant="h2">Payment Details</Typography>
      <Typography>{payment.amount} ETH</Typography>
      <Typography>{payment.address}</Typography>
      <Typography>{payment.date.toISOString()}</Typography>
      <Typography>{payment.status}</Typography>
    </div>
  );
}

export default PaymentDetails;
