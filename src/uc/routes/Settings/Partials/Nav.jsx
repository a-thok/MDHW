import React from 'react';
import Navbar from '../../../components/Navbar';
import getHash from '../../../mixins/getHash';

export default React.createClass({
  mixins: [getHash],
  render: function () {
    return (
      <div>
        <Navbar to="/settings/address" text="收获地址" icon="angle-right" />
      </div>
    );
  }
});
