import React, { useState } from 'react';
import { Grid, TextField, Button } from '@material-ui/core';

interface GalileoPaymentProps {
  amount: number;
  onSuccess: (transactionId: string) => void;
  onError: (error: Error) => void;
}

const GalileoPayment: React.FC<GalileoPaymentProps> = ({ amount, onSuccess, onError }) => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      // Make API call to Galileo to process payment
      const response = await fetch('https://api.galileo.io/payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer YOUR_GALILEO_API_KEY',
        },
        body: JSON.stringify({
          amount: amount,
          cardNumber: cardNumber,
          expiry: expiry,
          cvv: cvv,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        onSuccess(data.transactionId);
      } else {
        const errorData = await response.json();
        throw new Error(errorData.error);
      }
    } catch (error) {
      onError(error);
    }
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <TextField
          label="Card number"
          variant="outlined"
          fullWidth
          required
          value={cardNumber}
          onChange={(event) => setCardNumber(event.target.value)}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          label="Expiry"
          variant="outlined"
          fullWidth
          required
          value={expiry}
          onChange={(event) => setExpiry(event.target.value)}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          label="CVV"
          variant="outlined"
          fullWidth
          required
          value={cvv}
          onChange={(event) => setCvv(event.target.value)}
        />
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Pay ${amount}
        </Button>
      </Grid>
    </Grid>
  );
};

export default GalileoPayment;
