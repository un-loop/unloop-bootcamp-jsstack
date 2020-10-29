import { TextField } from '@material-ui/core';
import React from 'react';

const NameForm = ({form, getHandler}) => {
  return (
    <form>
      <TextField
        name="firstName"
        label="First Name"
        value={form.firstName}
        onChange={getHandler('firstName')}
      />
      <TextField
        name="lastName"
        label="Last Name"
        value={form.lastName}
        onChange={getHandler('lastName')}
      />      
    </form>
  )
}

export default NameForm;
