import React, { Component } from 'react';
import Header from './components/Header';
import getPath from './mixins/getPath.js';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Header: {
        isShowMenu: false
      },
      profile: {},
      profileTemp: {},
      orderAddr: {}
    };
    this.onToggleMenu = this.onToggleMenu.bind(this);
  }

  componentDidMount() {
    fetch('/m/user/info/person', {
      method: 'GET',
      credentials: 'include'
    })
      .then(res => res.json())
      .then(res => this.setState({
        profile: res.result,
        profileTemp: res.result
      }));
  }

  onProfileChange(key, value) {
    const newState = Object.assign({}, this.state.profileTemp);
    newState[key] = value;
    this.setState({ profileTemp: newState });
  }

  onUndoProfileChange(key) {
    const newState = Object.assign({}, this.state.profileTemp);
    newState[key] = this.state.profile[key];
    this.setState({ profileTemp: newState });
  }

  onSubmitProfileChange(key) {
    const newState = Object.assign({}, this.state.profile);
    newState[key] = this.state.profileTemp[key];
    fetch('/m/user/info/personEdit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify(newState)
    })
      .then(res => res.json())
      .then(res => {
        if (res.success) {
          this.setState({ profile: newState });
          window.location.hash = '#/settings/account';
        }
      });
  }

  onToggleMenu() {
    const newHeader = Object.assign({}, this.state.Header);
    newHeader.isShowMenu = !newHeader.isShowMenu;
    this.setState({ Header: newHeader });
  }

  onChangeHash() {
    const hash = location.hash.slice(1).replace(/\?.*/, '');
    let to;
    if (hash === '/') {
      to = false;
    } else {
      const indexOfSlash = hash.lastIndexOf('/');
      to = indexOfSlash < 2 ? '/' : hash.slice(0, indexOfSlash);
    }
    this.setState({ to });
  }

  onChangeOrderAddr(orderAddr) {
    this.setState({ orderAddr });
  }

  render() {
    const Child = this.props.children;
    const path = getPath.call(this, 'Home', 1);

    let extra;
    switch (path) {
      case 'Home':
        extra = { profile: this.state.profile };
        break;
      case 'Settings':
        extra = {
          profile: this.state.profile,
          profileTemp: this.state.profileTemp,
          onProfileChange: this.onProfileChange.bind(this),
          onUndoProfileChange: this.onUndoProfileChange.bind(this),
          onSubmitProfileChange: this.onSubmitProfileChange.bind(this),
          onChangeOrderAddr: this.onChangeOrderAddr.bind(this)
        };
        break;
      case 'Srdz':
        extra = { orderAddr: this.state.orderAddr };
        break;
      case 'Sbcs':
        extra = { orderAddr: this.state.orderAddr };
        break;
      default:
        extra = {};
    }
    return (
      <div>
        <Header
          {...this.state.Header}
          onToggleMenu={this.onToggleMenu}
          id={this.state.profile.id}
        />
        {React.cloneElement(Child, extra)}
      </div>
    );
  }
}
