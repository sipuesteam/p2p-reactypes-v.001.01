import React from 'react';
import { List, ListItem, ListItemText } from '@material-ui/core';
import { Payment } from './types';

interface PaymentListProps {
  payments: Payment[];
}

function PaymentList({ payments }: PaymentListProps) {
  return (
    <List>
      {payments.map((payment) => (
        <ListItem key={payment.id}>
          <ListItemText primary={payment.amount} secondary={payment.address} />
        </ListItem>
      ))}
    </List>
  );
}

export default PaymentList;
