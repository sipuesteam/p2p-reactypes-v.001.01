import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core';
import styles from './PaymentForm.module.css';

interface PaymentFormProps {
  onSubmit: (amount: number, address: string) => void;
}

function PaymentForm({ onSubmit }: PaymentFormProps) {
  const [amount, setAmount] = useState(0);
  const [address, setAddress] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(amount, address);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <TextField
        type="number"
        label="Amount"
        value={amount}
        onChange={(event) => setAmount(Number(event.target.value))}
      />
      <TextField
        label="Address"
        value={address}
        onChange={(event) => setAddress(event.target.value)}
      />
      <Button variant="contained" color="primary" type="submit">
        Pay
      </Button>
    </form>
  );
}

export default PaymentForm;
