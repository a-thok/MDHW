import React from 'react';
import Item from './item.jsx';
const ItemBox = React.createClass({
  render: function () {
    let comments = this.props.data.map((item) => (
        <Item name={item.name} text={item.text} key={item.name} hasCount={item.hasCount} hasInput = {item.hasInput} />
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
