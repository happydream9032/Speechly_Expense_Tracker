import React from 'react';
import { Container, Grid } from '@material-ui/core';

import ExpenseTracker from './components/ExpenseTracker';

const App = () => (
  <div>
    <Grid
      container
      spacing={0}
      alignItems="center"
      justify="center"
      style={{ minHeight: '100vh' }}
    >

      <Container maxWidth="xs">
        <ExpenseTracker />
      </Container>
    </Grid>
  </div>
);

export default App;
