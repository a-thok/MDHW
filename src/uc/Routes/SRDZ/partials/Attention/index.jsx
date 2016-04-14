import React from 'react';
import ListItem from '../../../../components/ListItem';

export default React.createClass({
  getInitialState: function () {
    let res = {
      data: [
      { img: '图1', title: '蓝牙耳机——世界上最小的立体声无线耳机', money: '500.00', sum: '20160', type: '创意订制' },
      { img: '图1', title: '蓝牙耳机——世界上最小的立体声无线耳机', money: '500.00', sum: '20166', type: 'logod订制' },
      { img: '图1', title: '蓝牙耳机——世界上最小的立体声无线耳机', money: '500.00', sum: '2016', type: '服装订制' },
      { img: '图1', title: '蓝牙耳机——世界上最小的立体声无线耳机', money: '500.00', sum: '2016', type: '创意订制' }
      ]
    };
    return res;
  },
  render: function () {
    let contentList = this.state.data.map((item, index) => (
      <ListItem
        key={index}
        {...item}
        multiple={{ '成交量': item.sum }}
        emp={`￥${item.money}/个`}
        label={`(${item.type})`}
        other="取消关注"
      />
    ));
    return (
      <div className="List">
        {contentList}
      </div>
    );
  }
});
