import React, { useState, useEffect } from 'react';
import { Typography } from '@material-ui/core';
import Web3 from 'web3';
import { getENSAddress } from './api';

interface BalanceProps {
  address: string;
}

function Balance({ address }: BalanceProps) {
  const [balance, setBalance] = useState<number | null>(null);
  const web3 = new Web3(Web3.givenProvider);

  useEffect(() => {
    async function fetchBalance() {
      try {
        const balance = await web3.eth.getBalance(getENSAddress(address));
        setBalance(parseFloat(web3.utils.fromWei(balance, 'ether')));
      } catch (error) {
        console.log(error);
      }
    }

    fetchBalance();
  }, [address, web3]);

  return (
    <div>
      <Typography variant="body1">
        Your balance is {balance !== null ? balance.toFixed(2) : 'loading...'} ETH
      </Typography>
    </div>
  );
}

export default Balance;
