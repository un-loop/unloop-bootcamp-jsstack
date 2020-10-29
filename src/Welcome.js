import { Typography } from '@material-ui/core';
import React from 'react';

const Welcome = ({name}) => (
  <Typography variant="h2">
    Welcome, {name}!
  </Typography>
);

export default Welcome;