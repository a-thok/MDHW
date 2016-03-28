import React from 'react';
import Input from './Input.jsx';
import Count from './Count.jsx';

const Item = React.createClass({
  render: function () {
    let content = (function () {
      if (this.props.hasInput) {
        return <Input text={this.props.text} />;
      } else if (this.props.hasCount) {
        return <Count text={this.props.text} />;
      }
      return this.props.text;
    }.bind(this)());
    let icon = (function () {
      if (this.props.hasIcon) {
        return <i className="fa fa-jpy"></i>;
      }
    }.bind(this)());
    return (
      <p className="itemRow">
        <span className="itemRow_name">{ this.props.name }</span>
        <span className={this.props.className}>{icon}{ content }</span>
      </p>
    );
  }
});
export default Item;
