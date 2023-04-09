import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core';
import { Address } from './types';

interface AddressBookProps {
  addresses: Address[];
  onAdd: (address: Address) => void;
}

function AddressBook({ addresses, onAdd }: AddressBookProps) {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onAdd({ name, address });
    setName('');
    setAddress('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <TextField
          label="Address"
          value={address}
          onChange={(event) => setAddress(event.target.value)}
        />
        <Button variant="contained" color="primary" type="submit">
          Add
        </Button>
      </form>
      <ul>
        {addresses.map((address) => (
          <li key={address.address}>{address.name} - {address.address}</li>
        ))}
      </ul>
    </div>
  );
}

export default AddressBook;
