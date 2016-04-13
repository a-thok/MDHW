import './main.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
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
import CysjHome from './routes/CYSJ/partials/Home';
import CysjRelease from './routes/CYSJ/partials/Release';
import CysjHasRelease from './routes/CYSJ/partials/HasRelease';
import CysjHasCollect from './routes/CYSJ/partials/HasCollect';
import HasDelivery from './routes/CYSJ/partials/HasDelivery';

import SRDZ from './routes/SRDZ';
import SrdzHome from './routes/SRDZ/partials/Home';
import BuyerList from './routes/SRDZ/partials/BuyerList';
import SellerList from './routes/SRDZ/partials/SellerList';
import Attention from './routes/SRDZ/partials/Attention';

import ZB from './routes/ZB';
import ZbHome from './routes/ZB/partials/Home';
import ZbRelease from './routes/ZB/partials/Release';
import ZbHasRelease from './routes/ZB/partials/HasRelease';
import ZbHasCollect from './routes/ZB/partials/HasCollect';

import ZC from './routes/ZC';
import App from './App';

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="/home" component={Home} />
      <Route path="/rczp" component={RCZP}>
        <Route path="/rczp/home" component={RczpHome} />
        <Route path="/rczp/preview" component={Preview} />
        <Route path="/rczp/compares" component={Compares} />
        <Route path="/rczp/position" component={Position} />
        <Route path="/rczp/resume" component={Resume} />
      </Route>
      <Route path="/cysj" component={CYSJ}>
        <Route path="/cysj/home" component={CysjHome} />
        <Route path="/cysj/release" component={CysjRelease} />
        <Route path="/cysj/hasRelease" component={CysjHasRelease} />
        <Route path="/cysj/hascollect" component={CysjHasCollect} />
        <Route path="/cysj/hasdelivery" component={HasDelivery} />
      </Route>
      <Route path="/srdz" component={SRDZ}>
        <Route path="/srdz/home" component={SrdzHome} />
        <Route path="/srdz/buyerList" component={BuyerList} />
        <Route path="/srdz/sellerList" component={SellerList} />
        <Route path="/srdz/attention" component={Attention} />
      </Route>
      <Route path="/zb" component={ZB}>
        <Route path="/zb/home" component={ZbHome} />
        <Route path="/zb/release" component={ZbRelease} />
        <Route path="/zb/hasrelease" component={ZbHasRelease} />
        <Route path="/zb/hascollect" component={ZbHasCollect} />
      </Route>
      <Route path="/zc" component={ZC} />
      <Route path="/address" component={Addresses} />
      <Route path="/reservation" component={Reservation} />
      <Route path="/reservationImfor" component={ReservationImfor} />
    </Route>
  </Router>
  ), document.querySelector('.page')
);
