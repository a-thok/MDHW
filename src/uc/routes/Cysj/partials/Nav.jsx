import React from 'react';
import Navbar from '../../../components/Navbar';

export default React.createClass({
  render: function () {
    return (
      <div >
        <Navbar to="/cysj/publish" text="发布项目" icon="pencil" />
        <Navbar to="/cysj/published" text="已发布的项目" icon="check-square-o" />
        <Navbar to="/cysj/collection" text="已收藏的项目" icon="heart" />
        <Navbar to="/cysj/delivered" text="已投递的项目" icon="file-text" />
      </div>
    );
  }
});
