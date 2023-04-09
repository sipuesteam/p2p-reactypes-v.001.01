import React from 'react';
import { Typography } from '@material-ui/core';
import { Payment } from './types';

interface PaymentHistoryProps {
  payments: Payment[];
}

function PaymentHistory({ payments }: PaymentHistoryProps) {
  return (
    <div>
      <Typography variant="h2">Payment History</Typography>
      <ul>
        {payments.map((payment) => (
          <li key={payment.id}>
            {payment.amount} ETH to {payment.address} on {payment.date.toISOString()}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PaymentHistory;
