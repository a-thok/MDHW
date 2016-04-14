import React from 'react';

import Header from './components/Header';

export default React.createClass({
  render: function () {
    return (
      <div>
        <Header to={this.props.children.type.displayName} />
        {this.props.children}
      </div>
    );
  }
});
