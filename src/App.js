import React from 'react';
import './App.scss';
import { Switch, Route } from 'react-router-dom';
import Home from './Components/pages/Home';
import Signin from './Components/pages/Signin';
import Dashboard from './Components/pages/Dashboard';
import AddNewPost from './Components/pages/AddNewPost';
import Account from './Components/pages/Account';
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
