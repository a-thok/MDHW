import React from 'react';

const FormItemBtn = React.createClass({
  render: function () {
    return (
      <button className="formItemBtn" type="button">{this.props.value}</button>
    );
  }
});
export default FormItemBtn;
