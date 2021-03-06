import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './App.js';
import Reminder from './app/javascript/modules/main/reminder.js';
import ShowReminder from './app/javascript/modules/main/showReminder.js';
import NavigationBar from './app/javascript/modules/main/navigationBar.js';

ReactDOM.render((
  <Router history={hashHistory} >
    <Route path = "/" component = {App} >
      <IndexRoute component = {Reminder} />
      <Route path = "ShowReminder" component = {ShowReminder} />
      <Route path = "NavigationBar" component = {NavigationBar} />
    </Route>
  </Router> ), document.getElementById('parent'));
