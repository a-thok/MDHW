import React from 'react';
import Navbar from '../../../components/Navbar';
import getHash from '../../../mixins/getHash';

export default React.createClass({
  mixins: [getHash],
  render: function () {
    return (
      <div>
        <Navbar to="/settings/account" text="账户信息" icon="angle-right" />
        <Navbar to="/settings/address" text="收货地址" icon="angle-right" />
      </div>
    );
  }
});
