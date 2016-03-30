import './main.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import Home from './routes/Home';
import Reservation from './routes/Reservation';
import ReservationImfor from './routes/ReservationImfor';
import Addresses from './routes/Addresses';
import App from './App';

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="/home" component={Home} />
      <Route path="/address" component={Addresses} />
      <Route path="/reservation" component={Reservation} />
      <Route path="/reservationImfor" component={ReservationImfor} />
    </Route>
  </Router>
  ), document.querySelector('.page')
);

