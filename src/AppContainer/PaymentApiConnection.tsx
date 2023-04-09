import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core';

interface PaymentApiConnectionProps {
  onConnect: (apiKey: string) => void;
}

const PaymentApiConnection: React.FC<PaymentApiConnectionProps> = ({ onConnect }) => {
  const [apiKey, setApiKey] = useState('');

  const handleConnect = () => {
    // Make API call to verify API key and retrieve user information
    // Once verified, call onConnect with the API key
    onConnect(apiKey);
  };

  return (
    <div>
      <TextField
        label="API Key"
        value={apiKey}
        onChange={(e) => setApiKey(e.target.value)}
      />
      <Button onClick={handleConnect}>Connect</Button>
    </div>
  );
};

export default PaymentApiConnection;
