import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Redux/Store';
import AlertTemplate from 'react-alert-template-basic';
import { positions, transitions, Provider as AlertProvider } from 'react-alert';

const options = {
    positions: positions.TOP_CENTER,
    timeout: 4000,
    transitions: transitions.SCALE,
    offset: '34px'
}

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <Router>
              <AlertProvider template={AlertTemplate} {...options}>
                  <App />
              </AlertProvider>
          </Router>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
