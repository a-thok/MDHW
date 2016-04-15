import React from 'react';

import Header from './components/Header';

export default React.createClass({
  getInitialState: function () {
    return { to: '' };
  },
  onChangeHash: function () {
    const hash = location.hash.slice(1).replace(/\?.*/, '');
    const indexOfSlash = hash.lastIndexOf('/');
    const to = indexOfSlash === 1 ? '/' : hash.slice(0, indexOfSlash);
    this.setState({ to });
  },
  render: function () {
    return (
      <div>
        <Header to={this.state.to} />
        {React.cloneElement(this.props.children, { onChangeHash: this.onChangeHash })}
      </div>
    );
  }
});
