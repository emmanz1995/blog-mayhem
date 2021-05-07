import React from 'react';
import './App.scss';
import { Switch, Route } from 'react-router-dom';
import Home from './Components/pages/Home';
import Signin from './Components/pages/Signin';
import ActivityFeed from './Components/pages/ActivityFeed';
import AddNewPost from './Components/pages/AddNewPost';
import Account from './Components/pages/Account';
import { PrivateRoute } from './PrivateRoute';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import theme from './Config/theme';

const GlobalStyles = createGlobalStyle`
    * {
      box-sizing: border-box;  
    }
    
    body {
        background-color: #fff;
    }
`

function App() {
  return (
    <ThemeProvider theme={theme}>
        <div className="App">
            <GlobalStyles />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/signin" component={Signin} />
                <PrivateRoute path="/dashboard" component={ActivityFeed} />
                <PrivateRoute path="/add" component={AddNewPost} />
                <PrivateRoute path="/account" component={Account} />
            </Switch>
        </div>
    </ThemeProvider>
  );
}

export default App;
