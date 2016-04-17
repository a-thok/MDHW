import React from 'react';

import Header from './components/Header';

export default React.createClass({
  getInitialState: function () {
    return {
      to: '',
      profile: {
        name: '郭大侠',
        phone: 123456789211,
        company: '创企信息科技有限公司',
        intro: '一次创业什么什么什么什么',
        msg: 0,
        money: 0
      }
    };
  },
  componentDidMount: function () {
    fetch('/m/sys/user/info/person', {
      method: 'GET',
      credentials: 'include'
    })
      .then(res => res.json())
      .then(res => this.setState({ profile: res.result }));
  },
  onChangeHash: function () {
    const hash = location.hash.slice(1).replace(/\?.*/, '');
    const indexOfSlash = hash.lastIndexOf('/');
    const to = indexOfSlash === 1 ? '/' : hash.slice(0, indexOfSlash);
    this.setState({ to });
  },
  render: function () {
    const Child = this.props.children;
    let props;
    if (Child.type.displayName === 'Home') {
      props = this.state.profile;
    }
    return (
      <div>
        <Header to={this.state.to} />
        {React.cloneElement(Child, Object.assign({ onChangeHash: this.onChangeHash }, { profile: props }))}
      </div>
    );
  }
});
