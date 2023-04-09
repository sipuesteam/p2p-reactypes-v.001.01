import React, { useState } from 'react';
import { Radio, TextField, Button, Typography } from '@material-ui/core';
import styles from './SubdomainForm.module.css';

type Props = {
  onCreateSubdomain: (subdomainType: string, subdomainName: string) => Promise<void>;
};

const SubdomainForm: React.FC<Props> = ({ onCreateSubdomain }) => {
  const [subdomainType, setSubdomainType] = useState('free');
  const [subdomainName, setSubdomainName] = useState('');

  const handleSubdomainTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSubdomainType(event.target.value);
  };

  const handleSubdomainNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSubdomainName(event.target.value);
  };

  const handleCreateSubdomainClick = async () => {
    try {
      await onCreateSubdomain(subdomainType, subdomainName);
    } catch (error) {
      console.log(error);
    }
  };

  return (
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
  );
};

export default SubdomainForm;
