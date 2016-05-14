import './main.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Home from './routes/Home';


// page最小高度为窗口高度
document.querySelector('.page').style.minHeight = `${window.innerHeight}px`;

import Rczp from './routes/Rczp';
import RczpNav from './routes/Rczp/partials/Nav';
import RczpPreview from './routes/Rczp/partials/Preview';
import RczpComment from './routes/Rczp/partials/Comment';
import RczpPost from './routes/Rczp/partials/Post';
import RczpResume from './routes/Rczp/partials/Resume';

import Cysj from './routes/Cysj';
import CysjNav from './routes/Cysj/partials/Nav';
import CysjPublish from './routes/Cysj/partials/Publish';
import CysjPublished from './routes/Cysj/partials/Published';
import CysjCollection from './routes/Cysj/partials/Collection';
import CysjDelivered from './routes/Cysj/partials/Delivered';
import CysjBidding from './routes/Cysj/partials/Bidding';

import Srdz from './routes/Srdz';
import SrdzNav from './routes/Srdz/partials/Nav';
import SrdzBuyer from './routes/Srdz/partials/Buyer';
import SrdzSeller from './routes/Srdz/partials/Seller';
import SrdzFollow from './routes/Srdz/partials/Follow';

import Zb from './routes/Zb';
import ZbNav from './routes/Zb/partials/Nav';
import ZbPublish from './routes/Zb/partials/Publish';
import ZbPublished from './routes/Zb/partials/Published';
import ZbCollection from './routes/Zb/partials/Collection';
import ZbBidding from './routes/Zb/partials/Bidding';

import Zc from './routes/Zc';
import ZcNav from './routes/Zc/partials/Nav';
import ZcOrder from './routes/Zc/partials/Order';
import ZcFollowed from './routes/Zc/partials/Follow';
import ZcSupport from './routes/Zc/partials/Support';
import ZcOrderForm from './routes/Zc/partials/OrderForm';

import App from './App';

import Settings from './routes/Settings';
import SettingsNav from './routes/Settings/partials/Nav';
import Addresses from './routes/Settings/partials/Address';
import AddressForm from './routes/Settings/partials/AddressForm';
import Account from './routes/Settings/partials/Account';
import AccountForm from './routes/Settings/partials/AccountForm';

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/rczp" component={Rczp}>
        <IndexRoute component={RczpNav} />
        <Route path="/rczp/preview" component={RczpPreview} />
        <Route path="/rczp/comment" component={RczpComment} />
        <Route path="/rczp/post" component={RczpPost} />
        <Route path="/rczp/resume" component={RczpResume} />
      </Route>
      <Route path="/cysj" component={Cysj}>
        <IndexRoute component={CysjNav} />
        <Route path="/cysj/publish" component={CysjPublish} />
        <Route path="/cysj/published" component={CysjPublished} />
        <Route path="/cysj/collection" component={CysjCollection} />
        <Route path="/cysj/delivered" component={CysjDelivered} />
        <Route path="/cysj/bidding" component={CysjBidding} />
      </Route>
      <Route path="/Srdz" component={Srdz}>
        <IndexRoute component={SrdzNav} />
        <Route path="/Srdz/buyer" component={SrdzBuyer} />
        <Route path="/Srdz/seller" component={SrdzSeller} />
        <Route path="/Srdz/follow" component={SrdzFollow} />
      </Route>
      <Route path="/zb" component={Zb}>
        <IndexRoute component={ZbNav} />
        <Route path="/zb/publish" component={ZbPublish} />
        <Route path="/zb/published" component={ZbPublished} />
        <Route path="/zb/collection" component={ZbCollection} />
        <Route path="/zb/bidding" component={ZbBidding} />
      </Route>
      <Route path="/zc" component={Zc}>
        <IndexRoute component={ZcNav} />
        <Route path="/zc/follow" component={ZcFollowed} />
        <Route path="/zc/support" component={ZcSupport} />
        <Route path="/zc/order" component={ZcOrder} />
        <Route path="/zc/orderform" component={ZcOrderForm} />
      </Route>
      <Route path="/settings" component={Settings}>
        <IndexRoute component={SettingsNav} />
        <Route path="/settings/address" component={Addresses} />
        <Route path="/settings/address/add" component={AddressForm} />
        <Route path="/settings/address/edit" component={AddressForm} />
        <Route path="/settings/account" component={Account} />
        <Route path="/settings/account/edit" component={AccountForm} />
      </Route>
    </Route>
  </Router>
  ), document.querySelector('.page')
);
