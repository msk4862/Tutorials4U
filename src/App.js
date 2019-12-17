import React from 'react';
import Header from './components/Header'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './components/Home'
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route path='/' component={Home}/>
          </Switch>
        </div>
      </BrowserRouter>  
      <Footer/>    
    </div>
  );
}

export default App;
