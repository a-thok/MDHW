import React from 'react';

export default React.createClass({
  render: function () {
    return (
      <div>
        {
          React.cloneElement(this.props.children, this.props)
        }
      </div>
    );
  }
});
