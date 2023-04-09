import React from 'react';
import { Typography } from '@material-ui/core';
import { Payment } from './types';

interface PaymentStatusProps {
  payment: Payment;
}

function PaymentStatus({ payment }: PaymentStatusProps) {
  return (
    <div>
      <Typography variant="h2">Payment Status</Typography>
      <Typography variant="body1">{`Payment ID: ${payment.id}`}</Typography>
      <Typography variant="body1">{`Amount: ${payment.amount} ETH`}</Typography>
      <Typography variant="body1">{`Address: ${payment.address}`}</Typography>
      <Typography variant="body1">{`Status: ${payment.status}`}</Typography>
      <Typography variant="body1">{`Date: ${payment.date.toISOString()}`}</Typography>
    </div>
  );
}

export default PaymentStatus;
