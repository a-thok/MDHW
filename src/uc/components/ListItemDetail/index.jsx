import React from 'react';
import DetailGroup from './DetailGroup';

export default React.createClass({
  render: function () {
    const nodes = this.props.data.map((item, index) => <DetailGroup key={index} name={item.name} text={item.text} />);
    return (
      <div className="ListItemDetail">
        {nodes}
        <div className="ListItemDetail_item">
          <a className="ListItemDetail_item_btn">查看详情</a>
        </div>
      </div>
    );
  }
});
