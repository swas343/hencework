
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, HashRouter} from 'react-router-dom';

import "./assets/css/bootstrap.min.css"
import "./assets/css/lineicons.css"
import "./assets/css/materialdesignicons.min.css"
import "./assets/css/fullcalendar.css"
import "./assets/css/main.css"


ReactDOM.render(
  <HashRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </HashRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
