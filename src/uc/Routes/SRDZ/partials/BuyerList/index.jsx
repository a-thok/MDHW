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
    let contentList = this.state.data.map((item, index) => (
      <ListItem
        key={index}
        {...item}
        title={item.title}
        other="确认收货"
        multiple={{}}
        emp={['金额', item.money]}
        small={item.time}
      />
    ));
    return (
      <ul className="list">
        <section style={{ display: 'flex', justifyContent: 'space-around' }}>
          <p>待付款</p>
          <p>已付款</p>
        </section>
        {contentList}
      </ul>
    );
  }
});
