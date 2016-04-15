import React from 'react';
import { Link } from 'react-router';
import ULink from '../../../../components/ULink';

export default React.createClass({
  render: function () {
    return (
      <div>
        <div className="ulinkWrap">
          <Link to="/zb/release"><ULink href="#" text="发布的项目" icon="angle-right" /></Link>
          <Link to="/zb/hasrelease"><ULink href="#" text="已发布的项目" icon="angle-right" /></Link>
          <Link to="/zb/hascollect"><ULink href="#" text="我的收藏" icon="angle-right" /></Link>
        </div>
      </div>
    );
  }
});
