import React from 'react';
import Count from './Count.jsx';

const Item = React.createClass({
  render: function () {
    return (
      <p className="itemRow">
        <span className="itemRow_name" >{ this.props.name }</span>
        <span className="itemRow_text" >
          { this.props.text }
          { this.props.hasCount ? <Count /> : '' }
        </span>
      </p>
    );
  }
});
export default Item;
