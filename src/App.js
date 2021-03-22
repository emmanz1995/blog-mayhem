import React from 'react';
import './App.scss';
import { Switch, Route } from 'react-router-dom';
import Home from './Components/Pages/Home';
import Signin from './Components/Pages/Signin';
import Dashboard from './Components/Pages/Dashboard';
import AddNewPost from './Components/Pages/AddNewPost';
import Account from './Components/Pages/Account';
import { PrivateRoute } from './PrivateRoute';


function App() {
  return (
    <div className="App">
      <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/signin" component={Signin} />
          <PrivateRoute path="/dashboard" component={Dashboard} />
          <PrivateRoute path="/add" component={AddNewPost} />
          <PrivateRoute path="/account" component={Account} />
      </Switch>
    </div>
  );
}

export default App;
