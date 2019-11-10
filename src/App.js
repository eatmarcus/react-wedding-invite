import React from 'react';
import { Grommet } from 'grommet';
import { Homepage } from './pages';

const theme = {
  global: {
    font: {
      family: 'Arapey-Regular',
      size: '18px',
      height: '20px',
    },
    colors: {
      border: 'white'
    }
  },
};

function App() {
  return (
    <Grommet theme={theme}>
      <Homepage />
    </Grommet>
  );
}

export default App;