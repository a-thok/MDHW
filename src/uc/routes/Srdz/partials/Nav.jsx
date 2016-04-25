import React from 'react';
import Navbar from '../../../components/Navbar';
import getHash from '../../../mixins/getHash';

export default React.createClass({
  mixins: [getHash],
  render: function () {
    return (
      <div>
        <Navbar to="/srdz/follow" text="已关注项目" icon="angle-right" />
        <Navbar to="/srdz/seller" text="卖家订单列表" icon="angle-right" />
        <Navbar to="/srdz/buyer" text="买家订单列表" icon="angle-right" />
      </div>
    );
  }
});
