import './main.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import Home from './components/Home';
import Reservation from './components/Reservation';
import ReservationImfor from './components/ReservationImfor';
import App from './App';

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="/home" component={Home} />
      <Route path="/reservation" component={Reservation} />
      <Route path="/ReservationImfor" component={ReservationImfor} />
    </Route>
  </Router>
  ), document.querySelector('.page')
);

