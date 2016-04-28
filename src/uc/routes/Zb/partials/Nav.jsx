import React from 'react';
import Navbar from '../../../components/Navbar';
import getHash from '../../../mixins/getHash';

export default React.createClass({
  mixins: [getHash],
  render: function () {
    return (
      <div>
        <Navbar to="/zb/publish" text="发布的项目" icon="pencil" />
        <Navbar to="/zb/published" text="已发布的项目" icon="check-square-o" />
        <Navbar to="/zb/collection" text="我的收藏" icon="heart" />
      </div>
    );
  }
});
