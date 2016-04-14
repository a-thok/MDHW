import React from 'react';

export default React.createClass({
  getInitialState: function () {
    return {
      Attention: {
        data: [
          { type: '科技', title: '蓝牙立体耳机世界上最小的立体无线耳机', item: '50000000', progress: '72%', state: '众筹中', total: '2000000' },
          { type: '科技', title: '蓝牙立体耳机世界上最小的立体无线耳机', item: '50000000', progress: '72%', state: '众筹中', total: '2000000' },
          { type: '科技', title: '蓝牙立体耳机世界上最小的立体无线耳机', item: '50000000', progress: '72%', state: '众筹中', total: '2000000' },
          { type: '科技', title: '蓝牙立体耳机世界上最小的立体无线耳机', item: '50000000', progress: '72%', state: '众筹中', total: '2000000' },
          { type: '科技', title: '蓝牙立体耳机世界上最小的立体无线耳机', item: '50000000', progress: '72%', state: '众筹中', total: '2000000' },
          { type: '科技', title: '蓝牙立体耳机世界上最小的立体无线耳机', item: '50000000', progress: '72%', state: '众筹中', total: '2000000' }
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
        data: [
        { type: '科技', title: '蓝牙立体耳机世界上最小的立体无线耳机', item: '50000000', progress: '72%', state: '众筹中' },
        { type: '科技', title: '蓝牙立体耳机世界上最小的立体无线耳机', item: '50000000', progress: '72%', state: '众筹中' },
        { type: '科技', title: '蓝牙立体耳机世界上最小的立体无线耳机', item: '50000000', progress: '72%', state: '众筹中' },
        { type: '科技', title: '蓝牙立体耳机世界上最小的立体无线耳机', item: '50000000', progress: '72%', state: '众筹中' },
        { type: '科技', title: '蓝牙立体耳机世界上最小的立体无线耳机', item: '50000000', progress: '72%', state: '众筹中' },
        { type: '科技', title: '蓝牙立体耳机世界上最小的立体无线耳机', item: '50000000', progress: '72%', state: '众筹中' }
        ]
      }
    };
  },
  render: function () {
    const Child = this.props.children;
    const ChildName = Child.type.displayName || Child.type.name;

    let extra;
    switch (ChildName) {
      case 'Order':
        extra = { onfilter: this.onfilter };
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
