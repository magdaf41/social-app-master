import React from 'react';

import './App.css';
import Home from './Home';
import Login from './Login';
import Menu from './Menu';

import SignUp from './SignUp';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";



function App() {
  return (
    <Router>
      <div className="App">
        <div className="Main-app">
          <Menu />
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/signup">
              <SignUp />


            </Route>

          </Switch>


        </div>



      </div>
    </Router>
  );
}

export default App;
