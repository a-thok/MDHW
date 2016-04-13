import React from 'react';
import { Link } from 'react-router';
import ULink from '../../../../components/ULink';

export default React.createClass({
  render: function () {
    return (
      <div>
        <div className="ulinkWrap">
          <Link to="/rczp/preview"><ULink href="#" text="简历预览" icon="angle-right" /></Link>
          <Link to="/rczp/resume"><ULink href="#" text="已投简历" icon="angle-right" /></Link>
          <Link to="/rczp/position"><ULink href="#" text="职位收藏" icon="angle-right" /></Link>
          <Link to="/rczp/compares"><ULink href="#" text="我的评价" icon="angle-right" /></Link>
        </div>
        <div className="ulinkWrap">
          <ULink href="#" text="帮助" icon="angle-right" />
          <ULink href="#" text="设置" icon="angle-right" />
        </div>
      </div>
    );
  }
});
