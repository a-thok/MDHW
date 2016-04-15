import React from 'react';
import { Link } from 'react-router';
import ULink from '../../../../components/ULink';
import getHash from '../../../../mixins/getHash';

export default React.createClass({
  mixins: [getHash],
  render: function () {
    return (
      <div >
        <div className="ulinkWrap">
          <Link to="/cysj/release"><ULink href="#" text="发布项目" icon="angle-right" /></Link>
          <Link to="/cysj/hasrelease"><ULink href="#" text="已发布的项目" icon="angle-right" /></Link>
          <Link to="/cysj/hascollect"><ULink href="#" text="已收藏的项目" icon="angle-right" /></Link>
          <Link to="/cysj/hasdelivery"><ULink href="#" text="已投递的项目" icon="angle-right" /></Link>
        </div>
      </div>
    );
  }
});
