import React from 'react';
import ULink from '../../components/ULink';

export default React.createClass({
  render: function () {
    return (
      <div >
        <div className="ulinkWrap">
          <ULink href="#" text="已关注项目" icon="angle-right" />
          <ULink href="#" text="卖家订单列表" icon="angle-right" />
          <ULink href="#" text="买家订单列表" icon="angle-right" />
        </div>
        <div className="ulinkWrap">
          <ULink href="#" text="帮助" icon="angle-right" />
          <ULink href="#" text="设置" icon="angle-right" />
        </div>
      </div>
    );
  }
});
