/* eslint-disable no-unused-vars */
import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import './App.scss';

import homepage_container from './pages/homepage/homepage_container';

function App() {
  return (
    <div className="App">
      <div className="App-Wrapper">
        <BrowserRouter>
          <Switch>
            <Route path='/' component={homepage_container} />
            <Route path='/userlists' component={homepage_container} />
          </Switch>
        </BrowserRouter>    
      </div>
    </div>
  );
}

export default App;
