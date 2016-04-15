import React from 'react';
import { Link } from 'react-router';
import ULink from '../../../../components/ULink';

export default React.createClass({
  render: function () {
    return (
      <div>
        <div className="ulinkWrap">
          <Link to="/zc/attention"><ULink href="#" text="关注列表" icon="angle-right" /></Link>
          <Link to="/zc/support"><ULink href="#" text="支持列表" icon="angle-right" /></Link>
          <Link to="/zc/order"><ULink href="#" text="订单列表" icon="angle-right" /></Link>
        </div>
      </div>
    );
  }
});
