import React from 'react';
import { Link } from 'react-router';
import ULink from '../../../../components/ULink';

export default React.createClass({
  render: function () {
    return (
      <div>
        <div className="ulinkWrap">
          <Link to="/rczp/preview"><ULink href="#" text="简历预览" icon="eye" /></Link>
          <Link to="/rczp/resume"><ULink href="#" text="已投简历" icon="inbox" /></Link>
          <Link to="/rczp/position"><ULink href="#" text="职位收藏" icon="star-o" /></Link>
          <Link to="/rczp/compares"><ULink href="#" text="我的评价" icon="comments-o" /></Link>
        </div>
      </div>
    );
  }
});
