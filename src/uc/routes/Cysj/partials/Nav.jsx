import React from 'react';
import Navbar from '../../../components/Navbar';
import getHash from '../../../mixins/getHash';

export default React.createClass({
  mixins: [getHash],
  render: function () {
    return (
      <div >
        <Navbar to="/cysj/publish" text="发布项目" icon="angle-right" />
        <Navbar to="/cysj/published" text="已发布的项目" icon="angle-right" />
        <Navbar to="/cysj/collection" text="已收藏的项目" icon="angle-right" />
        <Navbar to="/cysj/delivered" text="已投递的项目" icon="angle-right" />
      </div>
    );
  }
});
