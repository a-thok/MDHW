import React from 'react';
import loadList from '../../mixins/loadList.js';
import fetching from '../../mixins/fetching.js';

export default React.createClass({
  getInitialState: function () {
    return {
      Attention: {
        index: 0,
        fetching: false,
        finished: false,
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
        index: 0,
        fetching: false,
        finished: false,
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
        index: 0,
        fetching: false,
        finished: false,
        data: []
      }
    };
  },
  onAttentionList: function () {
    loadList.bind(this)('/m/sys/hr/deliver/deliverylist', 'Attention');
    fetching.bind(this)('Attention');
  },
  onSupportList: function () {
    loadList.bind(this)('/m/sys/hr/deliver/deliverylist', 'Support');
    fetching.bind(this)('Support');
  },
  onOrderList: function () {
    loadList.bind(this)('/m/sys/hr/deliver/deliverylist', 'Order');
    fetching.bind(this)('Order');
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
        extra = {
          onFilter: this.onFilter,
          onOrderList: this.onOrderList
        };
        break;
      case 'Attention':
        extra = {
          onAttentionList: this.onAttentionList
        };
        break;
      case 'Support':
        extra = {
          onSupportList: this.onSupportList
        };
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
            { onChangeHash: this.props.onChangeHash },
            extra
          ))
        }
      </div>
    );
  }
});
