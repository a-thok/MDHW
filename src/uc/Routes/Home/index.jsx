import React from 'react';

import Profile from './Profile';
import Basics from './Basics';
import Modules from './Modules';
import Navbar from '../../components/Navbar';
import getHash from '../../mixins/getHash';

export default React.createClass({
  mixins: [getHash],
  render: function () {
    return (
      <div className="home">
        <Profile
          {...this.props.profile}
        />
        <Basics
          msg={0}
          money={0}
        />
        <Modules />
        {
          /*
          <div className="ulinkWrap">
            <ULink to="#" text="我的收藏" icon="angle-right" />
            <ULink to="#" text="我的足迹" icon="angle-right" />
            <ULink to="#" text="我的服务" icon="angle-right" />
          </div>
          */
        }
        <div className="ulinkWrap">
          <Navbar to="dfadas" text="帮助" icon="question-circle" />
          <Navbar to="dfadfa" text="设置" icon="gear" />
        </div>
      </div>
    );
  }
});
