import React from 'react';

const FormItemBtn = React.createClass({
  render: function () {
    return (
      <button className="FormItemBtn" type="button">{this.props.value}</button>
    );
  }
});
export default FormItemBtn;
