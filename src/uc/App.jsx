import React from 'react';

import Header from './components/Header';

export default React.createClass({
  getInitialState: function () {
    return {
      to: '',
      profile: {},
      temp: {}
    };
  },
  componentDidMount: function () {
    fetch('/m/user/info/person', {
      method: 'GET',
      credentials: 'include'
    })
      .then(res => res.json())
      .then(res => this.setState({
        profile: res.result,
        temp: res.result
      }));
  },
  onChange: function (newText, field) {
    const newState = Object.assign({}, this.state.temp);
    newState[field] = newText;
    console.log(newText, field);
    this.setState({ temp: newState });
  },
  onKeyup: function (newText, field) {
    console.log(newText, field);
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
    let extra;
    switch (Child.type.displayName) {
      case 'Home':
        extra = { profile: this.state.profile };
        break;
      case 'Account':
        extra = {
          profile: this.state.profile,
          temp: this.state.temp,
          onChange: this.onChange,
          onKeyup: this.onKeyup
        };
        break;
      default:
        extra = {};
    }
    return (
      <div>
        <Header to={this.state.to} />
        {React.cloneElement(Child, Object.assign({ onChangeHash: this.onChangeHash }, extra))}
      </div>
    );
  }
});
