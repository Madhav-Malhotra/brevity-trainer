import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from "./components/Home.js";
import Exercise from './components/Exercise.js';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/record">
          <Exercise />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
