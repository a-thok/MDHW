import React from 'react';
import ListItem from '../../../../components/ListItem';
export default React.createClass({
  getInitialState: function () {
    let res = {
      data: [
      { img: '图1', title: '蓝牙耳机——世界上最小的立体声无线耳机', money: '500.00', time: '2016-05-06' },
      { img: '图1', title: '蓝牙耳机——世界上最小的立体声无线耳机', money: '500.00', time: '2016-05-06' },
      { img: '图1', title: '蓝牙耳机——世界上最小的立体声无线耳机', money: '500.00', time: '2016-05-06' },
      { img: '图1', title: '蓝牙耳机——世界上最小的立体声无线耳机', money: '500.00', time: '2016-05-06' }
      ]
    };
    return res;
  },
  render: function () {
    let contentList = this.state.data.map((data, index) => (
      <ListItem
        key={index}
        {...data}
        mMiddle={data.money}
        rTop="确认收货"
        rBottom={data.time}
      />
    ));
    return (
      <div className="List">
        {contentList}
      </div>
    );
  }
});
