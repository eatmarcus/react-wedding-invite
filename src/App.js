import React from 'react';
import { Grommet } from 'grommet';
import { Homepage, Login, About } from './pages';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


const theme = {
  global: {
    font: {
      family: 'Arapey-Regular',
      size: '18px',
      height: '20px',
    },
    colors: {
      border: 'white',
      text: 'white'
    },
    control:{
      border:{
        color: 'white'
      }
    },
    focus:{
      border: {
        color: 'white'
      }
    }
  },
  formField: {
    label: {
      margin: 'none'
    }
  }
};

function App() {
  return (
    <Grommet theme={theme}>
      <Router>
        <Switch>
          <Route path="/login" component={Login}/>
          <Route path="/about" component={About} />
          <Route path="/" component={Homepage} />
        </Switch>
      </Router>
    </Grommet>
  );
}

export default App;