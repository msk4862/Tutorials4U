import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import history from './history';
import Home from './components/Home';
import Header from "./components/Header";


function App() {
  return (
    <div className="App">
      <Router history={history}>
        <div>
            <Header />
            <Switch>
              <Route path='/' component={Home}/>
            </Switch>
        </div>
      </Router>  
    </div>
  );
}

export default App;
