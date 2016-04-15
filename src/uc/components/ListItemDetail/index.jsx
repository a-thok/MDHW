import React from 'react';
import DetailGroup from './DetailGroup';

export default React.createClass({
  render: function () {
    return (
      <div className="ListItemDetail">
        <DetailGroup name="收件人" />
        <DetailGroup name="收件收件地址" />
        <DetailGroup name="单价" />
        <DetailGroup name="数量" />
        <DetailGroup name="买家留言" />
        <DetailGroup name="订单号" />
        <DetailGroup name="下单时间" />
        <DetailGroup name="收件人" />
        <div className="ListItemDetail_item">
          <button className="ListItemDetail_item_btn">查看详情</button>
        </div>
      </div>
    );
  }
});
