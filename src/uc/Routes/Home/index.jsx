import React from 'react';

import Profile from './Profile';
import Basics from './Basics';
import Modules from './Modules';
import ULink from '../../components/ULink';
import { Link } from 'react-router';

export default React.createClass({
  render: function () {
    return (
      <div className="home">
        <Profile
          {...this.props.profile}
        />
        <Basics
          msg={this.state.msg}
          money={this.state.money}
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
          <Link to="/dfadsf"><ULink text="帮助" icon="question-circle" /></Link>
          <Link to="/dfadsf"><ULink text="设置" icon="gear" /></Link>
        </div>
      </div>
    );
  }
});
