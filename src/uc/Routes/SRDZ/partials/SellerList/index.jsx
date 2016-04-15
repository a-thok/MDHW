import React from 'react';
import ListItem from '../../../../components/ListItem';

export default React.createClass({
  getInitialState: function () {
    let res = {
      data: [
      { img: '图1', title: '蓝牙耳机——世界上最小的立体声无线耳机', buyerName: '张三', state: '待发货', type: '科学' },
      { img: '图1', title: '蓝牙耳机——世界上最小的立体声无线耳机', buyerName: '李四', state: '待发货', type: '日常' },
      { img: '图1', title: '蓝牙耳机——世界上最小的立体声无线耳机', buyerName: '马武', state: '待发货', type: '科学' },
      { img: '图1', title: '蓝牙耳机——世界上最小的立体声无线耳机', buyerName: '午马', state: '待发货', type: '科学' }
      ]
    };
    return res;
  },
  render: function () {
    const content = this.state.data.map((item, index) => (
      <ListItem
        key={index}
        {...item}
        multiple={{ '状态': item.state }}
        emp={['买家名称', item.buyerName]}
        small={item.type}
        tep="down"
      />
    ));
    return (
      <div>
        <section style={{ display: 'flex', justifyContent: 'space-around' }}>
          <p>待付款</p>
          <p>已付款</p>
        </section>
        <ul className="list">
          {content}
        </ul>
      </div>
    );
  }
});
