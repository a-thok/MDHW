import React from 'react';
import ULink from '../../components/ULink';

export default React.createClass({
  render: function () {
    return (
      <div >
        <div className="ulinkWrap">
          <ULink href="#" text="关注列表" icon="angle-right" />
          <ULink href="#" text="支持列表" icon="angle-right" />
          <ULink href="#" text="订单列表" icon="angle-right" />
        </div>
        <div className="ulinkWrap">
          <ULink href="#" text="帮助" icon="angle-right" />
          <ULink href="#" text="设置" icon="angle-right" />
        </div>
      </div>
    );
  }
});
