import React from 'react';
import { Grommet } from 'grommet';
import { Homepage } from './pages';

const theme = {
  global: {
    font: {
      family: 'CormorantGaramond-Regular',
      size: '18px',
      height: '20px',
    },
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