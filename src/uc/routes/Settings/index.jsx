import React from 'react';

export default React.createClass({
  render: function () {
    const Child = this.props.children;
    // const ChildName = Child.type.displayName || Child.type.name;
    return (
      <div>
        {
          React.cloneElement(Child, Object.assign(
            {},
            { onChangeHash: this.props.onChangeHash }
          ))
        }
      </div>
    );
  }
});
