import React from 'react';
import './App.scss';
import { Switch, Route } from 'react-router-dom';
import Home from './Components/Pages/Home';
import Signin from "./Components/Pages/Signin";
import Dashboard from "./Components/Pages/Dashboard";

function App() {
  return (
    <div className="App">
      <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/signin" component={Signin} />
          <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </div>
  );
}

export default App;
