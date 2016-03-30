import React from 'react';

import Profile from './Profile';
import Basics from './Basics';
import Modules from './Modules';
import ULink from '../../components/ULink';

export default React.createClass({
  getInitialState: function () {
    return {
      name: '郭大侠',
      phone: 123456789211,
      company: '创企信息科技有限公司',
      intro: '一次创业什么什么什么什么',
      msg: 0,
      money: 0
    };
  },
  render: function () {
    return (
      <div className="home">
        <Profile
          name={this.state.name}
          phone={this.state.phone}
          company={this.state.company}
          intro={this.state.intro}
        />
        <Basics
          msg={this.state.msg}
          money={this.state.money}
        />
        <Modules />
        <div className="link">
          <ULink href="#" text="我的收藏" icon="angle-right" />
          <ULink href="#" text="我的足迹" icon="angle-right" />
          <ULink href="#" text="我的服务" icon="angle-right" />
        </div>
        <div className="link">
          <ULink href="#" text="帮助" icon="angle-right" />
          <ULink href="#" text="设置" icon="angle-right" />
        </div>
      </div>
    );
  }
});
