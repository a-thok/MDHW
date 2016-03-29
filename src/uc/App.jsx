import React from 'React';

import Header from './components/Header';

export default React.createClass({
  render: function () {
    return (
      <div>
        <Header />
        {this.props.children}
      </div>
    );
  }
});
