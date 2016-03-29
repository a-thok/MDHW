import './main.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import Home from './components/Home';
import Reservation from './components/Reservation';
import ReservationImfor from './components/ReservationImfor';

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={Home} />
    <Route path="/reservation" component={Reservation} />
    <Route path="/ReservationImfor" component={ReservationImfor} />
  </Router>
  ), document.querySelector('.page')
);

