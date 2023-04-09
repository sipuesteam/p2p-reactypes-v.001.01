import React, { useState, useEffect } from 'react';
import { API_URL } from './constants';
import Web3 from 'web3';
import { Button, Radio, TextField, Typography } from '@material-ui/core';
import { createSubdomain, getENSAddress, getGraphData } from './api';
import SubdomainForm from './AppContainer/copyrightClause';
import SubdomainForm from './AppContainer/SubdomainForm';
import styles from './App.module.css';

function App() {
  const [data, setData] = useState([]);
  const [balance, setBalance] = useState(null);
  const [subdomainType, setSubdomainType] = useState('free');
  const [subdomainName, setSubdomainName] = useState('');
  const web3 = new Web3(Web3.givenProvider);

  useEffect(() => {
    async function fetchData() {
      try {
        const [coinbaseData, ensData, galileoData, finzlyData] = await Promise.all([
          getGraphData(`${API_URL}/coinbase`),
          getGraphData(`${API_URL}/ens`),
          getGraphData(`${API_URL}/galileo`),
          getGraphData(`${API_URL}/finzly`)
        ]);
        setData([...coinbaseData, ...ensData, ...galileoData, ...finzlyData]);

        const balance = await web3.eth.getBalance(getENSAddress('example.eth'));
        setBalance(balance);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, [web3]);

  const handleSubdomainTypeChange = (event) => {
    setSubdomainType(event.target.value);
  };

  const handleSubdomainNameChange = (event) => {
    setSubdomainName(event.target.value);
  };

  const handleCreateSubdomainClick = async () => {
    try {
      const subdomain = await createSubdomain(subdomainType, subdomainName);
      console.log(subdomain);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
  <Typography variant="h1" className={styles.title}>
    Place2Pay
  </Typography>
  <Typography variant="body1">
    This is a demo of Place2Pay, a payment bridge subdomain system offering secure payments.
  </Typography>
  <Typography variant="body1">
    The platform does not issue any token or host any crypto, and it is purely a demonstration of how subdomains can be used for payment routing.
  </Typography>
  <div className={styles.subdomainForm}>
    <Typography variant="h2">Create Subdomain</Typography>
    <Radio
      checked={subdomainType === 'free'}
      onChange={handleSubdomainTypeChange}
      value="free"
      name="subdomain-type"
      inputProps={{ 'aria-label': 'Free' }}
    />
    <Typography variant="body1">Free</Typography>
    <Radio
      checked={subdomainType === 'paid'}
      onChange={handleSubdomainTypeChange}
      value="paid"
      name="subdomain-type"
      inputProps={{ 'aria-label': 'Paid' }}
    />
    <Typography variant="body1">Paid</Typography>
    <TextField
      label="Subdomain Name"
      value={subdomainName}
      onChange={handleSubdomainNameChange}
    />
    <Button variant="contained" color="primary" onClick={handleCreateSubdomainClick}>
      Create Subdomain
    </Button>
  </div>
  <div>
    <Typography variant="h2">Data</Typography>
    <ul>
      {data.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  </div>
  {balance !== null && (
    <Typography variant="body1">
      Your balance is {web3.utils.fromWei(balance, 'ether')} ETH
    </Typography>
  )}
</div>
      </div>
    </div>
  );
}

export default App;
