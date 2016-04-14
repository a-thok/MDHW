import React from 'react';
import { Link } from 'react-router';
import ULink from '../../../../components/ULink';

export default React.createClass({
  render: function () {
    return (
      <div>
        <div className="ulinkWrap">
          <Link to="/srdz/attention"><ULink href="#" text="已关注项目" icon="angle-right" /></Link>
          <Link to="/srdz/sellerlist"><ULink href="#" text="卖家订单列表" icon="angle-right" /></Link>
          <Link to="/srdz/buyerlist"><ULink href="#" text="买家订单列表" icon="angle-right" /></Link>
        </div>
        <div className="ulinkWrap">
          <ULink href="#" text="帮助" icon="angle-right" />
          <ULink href="#" text="设置" icon="angle-right" />
        </div>
      </div>
    );
  }
});
