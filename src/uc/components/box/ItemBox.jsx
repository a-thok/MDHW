import React from 'react';
import Item from './item.jsx';
const ItemBox = React.createClass({
  render: function () {
    let comments = this.props.data.map((item, index) => (
        <Item
          className={this.props.alignRight ? 'itemRow_text-float' : 'itemRow_text'}
          name={item.name} text={item.text}
          key={item.name}
          hasInput = {this.props.hasInput}
          hasCount = {this.props.hasCount && this.props.hasCount[index]}
          hasIcon = {this.props.hasIcon && this.props.hasIcon[index]}
        />
      )
    );
    return (
      <div className="itemBox">
        {comments}
      </div>
    );
  }
});

export default ItemBox;
