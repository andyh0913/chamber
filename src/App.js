import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';

import Password from './components/Password';
import Game from './components/Game';
import Caution from './components/Caution';

class App extends Component {
  constructor(){
    super()
    this.state = {
      password: false,

    }
  }
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path = "/" component={Password} />
          <Route exact path = "/game" component={Game} />
          <Route exact path = "/caution" component={Caution} />
        </Switch>
      </div>
    );
  }
}

export default App;
