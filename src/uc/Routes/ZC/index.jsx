import React from 'react';

export default React.createClass({
  getInitialState: function () {
    return {
      Attention: {
        data: [
          { img: 'http://ugc.qpic.cn/baikepic2/28006/20141031114942-931010796.jpg/300', type: '科技', title: '蓝牙立体耳机世界上最小的立体无线耳机', item: '50000000', progress: '72%', state: '众筹中', total: '2000000' },
          { img: 'http://ugc.qpic.cn/baikepic2/28006/20141031114942-931010796.jpg/300', type: '科技', title: '蓝牙立体耳机世界上最小的立体无线耳机', item: '50000000', progress: '72%', state: '众筹中', total: '2000000' },
          { img: 'http://ugc.qpic.cn/baikepic2/28006/20141031114942-931010796.jpg/300', type: '科技', title: '蓝牙立体耳机世界上最小的立体无线耳机', item: '50000000', progress: '72%', state: '众筹中', total: '2000000' },
          { img: 'http://ugc.qpic.cn/baikepic2/28006/20141031114942-931010796.jpg/300', type: '科技', title: '蓝牙立体耳机世界上最小的立体无线耳机', item: '50000000', progress: '72%', state: '众筹中', total: '2000000' },
          { img: 'http://ugc.qpic.cn/baikepic2/28006/20141031114942-931010796.jpg/300', type: '科技', title: '蓝牙立体耳机世界上最小的立体无线耳机', item: '50000000', progress: '72%', state: '众筹中', total: '2000000' },
          { img: 'http://ugc.qpic.cn/baikepic2/28006/20141031114942-931010796.jpg/300', type: '科技', title: '蓝牙立体耳机世界上最小的立体无线耳机', item: '50000000', progress: '72%', state: '众筹中', total: '2000000' }
        ]
      },
      Support: {
        data: [
          { type: '科技', title: '蓝牙立体耳机世界上最小的立体无线耳机', item: '50000000', progress: '72%', state: '众筹中', total: '200000' },
          { type: '科技', title: '蓝牙立体耳机世界上最小的立体无线耳机', item: '50000000', progress: '72%', state: '众筹中', total: '200000' },
          { type: '科技', title: '蓝牙立体耳机世界上最小的立体无线耳机', item: '50000000', progress: '72%', state: '众筹中', total: '200000' },
          { type: '科技', title: '蓝牙立体耳机世界上最小的立体无线耳机', item: '50000000', progress: '72%', state: '众筹中', total: '200000' },
          { type: '科技', title: '蓝牙立体耳机世界上最小的立体无线耳机', item: '50000000', progress: '72%', state: '众筹中', total: '200000' },
          { type: '科技', title: '蓝牙立体耳机世界上最小的立体无线耳机', item: '50000000', progress: '72%', state: '众筹中', total: '200000' }
        ]
      },
      Order: {
        type: 0,
        data: []
      }
    };
  },
  onFilter: function (type) {
    const data1 = [
      { type: '科技', title: '蓝牙立体耳机世界上最小的立体无线耳机', item: '50000000', progress: '72%', state: '众筹中' },
      { type: '科技', title: '蓝牙立体耳机世界上最小的立体无线耳机', item: '50000000', progress: '72%', state: '众筹中' },
      { type: '科技', title: '蓝牙立体耳机世界上最小的立体无线耳机', item: '50000000', progress: '72%', state: '众筹中' },
      { type: '科技', title: '蓝牙立体耳机世界上最小的立体无线耳机', item: '50000000', progress: '72%', state: '众筹中' },
      { type: '科技', title: '蓝牙立体耳机世界上最小的立体无线耳机', item: '50000000', progress: '72%', state: '众筹中' },
      { type: '科技', title: '蓝牙立体耳机世界上最小的立体无线耳机', item: '50000000', progress: '72%', state: '众筹中' }
    ];
    const data2 = [
      { type: '科技2', title: '蓝牙立体耳机世界上最小的立体无线耳机', item: '50000000', progress: '72%', state: '众筹中' },
      { type: '科技3', title: '蓝牙立体耳机世界上最小的立体无线耳机', item: '50000000', progress: '72%', state: '众筹中' },
      { type: '科技3', title: '蓝牙立体耳机世界上最小的立体无线耳机', item: '50000000', progress: '72%', state: '众筹中' },
      { type: '科技3', title: '蓝牙立体耳机世界上最小的立体无线耳机', item: '50000000', progress: '72%', state: '众筹中' },
      { type: '科技2', title: '蓝牙立体耳机世界上最小的立体无线耳机', item: '50000000', progress: '72%', state: '众筹中' },
      { type: '科技2', title: '蓝牙立体耳机世界上最小的立体无线耳机', item: '50000000', progress: '72%', state: '众筹中' }
    ];
    const newState = Object.assign({}, this.state);
    newState.Order.type = type;
    newState.Order.data = !type ? data1 : data2;
    this.setState(newState);
  },
  render: function () {
    const Child = this.props.children;
    const ChildName = Child.type.displayName || Child.type.name;

    let extra;
    switch (ChildName) {
      case 'Order':
        extra = { onFilter: this.onFilter };
        break;
      default:
        extra = {};
    }

    return (
      <div>
        {
          React.cloneElement(Child, Object.assign(
            {},
            this.state[ChildName],
            extra
          ))
        }
      </div>
    );
  }
});
