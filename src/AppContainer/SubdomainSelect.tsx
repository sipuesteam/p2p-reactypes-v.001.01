import React from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';

interface SubdomainSelectProps {
  subdomains: string[];
  value: string;
  onChange: (event: React.ChangeEvent<{ value: unknown }>) => void;
}

function SubdomainSelect({ subdomains, value, onChange }: SubdomainSelectProps) {
  return (
    <FormControl>
      <InputLabel id="subdomain-select-label">Select a Subdomain</InputLabel>
      <Select labelId="subdomain-select-label" value={value} onChange={onChange}>
        {subdomains.map((subdomain) => (
          <MenuItem key={subdomain} value={subdomain}>
            {subdomain}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default SubdomainSelect;
