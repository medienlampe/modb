import React, { Component } from 'react';
import { Home } from './components/pages/Home';
import { Models } from './components/pages/Models';
import { Ideas } from './components/pages/Ideas';
import { Contracts } from './components/pages/Contracts';
import { Contracttypes } from './components/pages/Contracttypes';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import './assets/foundation.css';
import './assets/App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/home" />} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/models" component={Models} />
          <Route exact path="/ideas" component={Ideas} />
          <Route exact path="/contracts" component={Contracts} />
          <Route exact path="/contracttypes" component={Contracttypes} />
        </Switch>
      </Router>
    );
  }
}

export default App;
