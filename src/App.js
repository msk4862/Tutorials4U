import React from 'react';
import Header from './components/Header'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css'
import Home from './components/Home'
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Header />
            <div>
              <Switch>
                <Route path='/' component={Home}/>
              </Switch>
            </div>
        </div>
      </BrowserRouter>  
      <Footer/>    
    </div>
  );
}

export default App;
