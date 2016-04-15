import React from 'react';
import { Link } from 'react-router';
import ULink from '../../../../components/ULink';
import getHash from '../../../../mixins/getHash';

export default React.createClass({
  mixins: [getHash],
  render: function () {
    return (
      <div>
        <div className="ulinkWrap">
          <Link to="/srdz/attention"><ULink href="#" text="已关注项目" icon="angle-right" /></Link>
          <Link to="/srdz/sellerlist"><ULink href="#" text="卖家订单列表" icon="angle-right" /></Link>
          <Link to="/srdz/buyerlist"><ULink href="#" text="买家订单列表" icon="angle-right" /></Link>
        </div>
      </div>
    );
  }
});
