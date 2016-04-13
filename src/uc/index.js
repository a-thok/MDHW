import './main.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Home from './routes/Home';
import Reservation from './routes/Reservation';
import ReservationImfor from './routes/ReservationImfor';
import Addresses from './routes/Addresses';
import RCZP from './routes/RCZP';
import RczpHome from './routes/RCZP/partials/Home';
import Preview from './routes/RCZP/partials/Preview';
import Compares from './routes/RCZP/partials/Compares';
import Position from './routes/RCZP/partials/Position';
import Resume from './routes/RCZP/partials/Resume';
import CYSJ from './routes/CYSJ';
import SRDZ from './routes/SRDZ';
import ZB from './routes/ZB';
import ZC from './routes/ZC';
import App from './App';
import Test from './routes/Test';

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/rczp" component={RCZP}>
        <IndexRoute component={RczpHome} />
        <Route path="/rczp/preview" component={Preview} />
        <Route path="/rczp/compares" component={Compares} />
        <Route path="/rczp/position" component={Position} />
        <Route path="/rczp/resume" component={Resume} />
      </Route>
      <Route path="/cysj" component={CYSJ} />
      <Route path="/srdz" component={SRDZ} />
      <Route path="/zb" component={ZB} />
      <Route path="/zc" component={ZC} />
      <Route path="/address" component={Addresses} />
      <Route path="/reservation" component={Reservation} />
      <Route path="/reservationImfor" component={ReservationImfor} />
      <Route path="/test" component={Test} />
    </Route>
  </Router>
  ), document.querySelector('.page')
);
