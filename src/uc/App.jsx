import React from 'react';

import Header from './components/Header';

export default React.createClass({
  getInitialState: function () {
    return {
      to: '',
      profile: {}
    };
  },
  componentDidMount: function () {
    fetch('/m/user/info/person', {
      method: 'GET',
      credentials: 'include'
    })
      .then(res => res.json())
      .then(res => this.setState({ profile: res.result }));
  },
  onChangeHash: function () {
    const hash = location.hash.slice(1).replace(/\?.*/, '');
    let to;
    if (hash === '/') {
      to = false;
    } else {
      const indexOfSlash = hash.lastIndexOf('/');
      to = indexOfSlash === 1 ? '/' : hash.slice(0, indexOfSlash);
    }
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
