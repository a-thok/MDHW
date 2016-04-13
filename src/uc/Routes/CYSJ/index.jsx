import React from 'react';
import ULink from '../../components/ULink';

export default React.createClass({
  render: function () {
    return (
      <div >
        <div className="ulinkWrap">
          <ULink href="#" text="发布项目" icon="angle-right" />
          <ULink href="#" text="已发布的项目" icon="angle-right" />
          <ULink href="#" text="已收藏的项目" icon="angle-right" />
          <ULink href="#" text="已投递的项目" icon="angle-right" />
        </div>
        <div className="ulinkWrap">
          <ULink href="#" text="帮助" icon="angle-right" />
          <ULink href="#" text="设置" icon="angle-right" />
        </div>
      </div>
    );
  }
});
