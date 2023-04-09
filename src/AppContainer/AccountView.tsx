import React from 'react';
import { Grid, Typography, Avatar } from '@material-ui/core';
import { Account } from './types';
import ProfileMenu from './ProfileMenu';
import Balance from './Balance';
import AddressBook from './AddressBook';
import PaymentList from './PaymentList';
import PaymentHistory from './PaymentHistory';
import PaymentForm from './PaymentForm';
import SubdomainForm from './SubdomainForm';
import SubdomainSelect from './SubdomainSelect';
import PaymentStatus from './PaymentStatus';

interface AccountViewProps {
  account: Account;
}

function AccountView({ account }: AccountViewProps) {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={4}>
        <Grid container alignItems="center" spacing={2}>
          <Grid item>
            <Avatar alt={account.name} src={account.avatarUrl} />
          </Grid>
          <Grid item>
            <Typography variant="h6">{account.name}</Typography>
            <Typography variant="body1">{account.email}</Typography>
          </Grid>
        </Grid>
        <ProfileMenu />
        <SubdomainForm subdomain={account.subdomain} />
      </Grid>
      <Grid item xs={12} md={8}>
        <Balance balance={account.balance} />
        <AddressBook contacts={account.contacts} />
        <PaymentList payments={account.payments} />
        <PaymentForm contacts={account.contacts} />
        <PaymentHistory payments={account.payments} />
        <PaymentStatus payment={account.payments[0]} />
      </Grid>
    </Grid>
  );
}

export default AccountView;
