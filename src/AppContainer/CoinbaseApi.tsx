import React, { useState, useEffect } from 'react';
import Coinbase from 'coinbase';
import { CoinbaseAccount } from './types';

interface CoinbaseApiProps {
  apiKey: string;
  apiSecret: string;
  accountId: string;
}

function CoinbaseApi({ apiKey, apiSecret, accountId }: CoinbaseApiProps) {
  const [account, setAccount] = useState<CoinbaseAccount | null>(null);

  useEffect(() => {
    const client = new Coinbase.Client({
      apiKey,
      apiSecret,
      strictSSL: false // optional, depending on your environment
    });

    client.getAccount(accountId, (err, account) => {
      if (err) {
        console.error(err);
        return;
      }
      setAccount(account);
    });
  }, [apiKey, apiSecret, accountId]);

  if (!account) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Account Information</h2>
      <p>Name: {account.name}</p>
      <p>Balance: {account.balance.amount} {account.balance.currency}</p>
    </div>
  );
}

export default CoinbaseApi;
