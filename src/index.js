import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import SecretPage from "./Pages/SecretPage/SecretPage";

ReactDOM.render(
  <Router>
      <Switch>
          <Route path='/fatmensecret'>
              <SecretPage/>
          </Route>
          <Route path='/'>
              <App />
          </Route>
      </Switch>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
