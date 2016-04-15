import React from 'react';

export default React.createClass({
  getInitialState: function () {
    return {
      Attention: {
        data: [
          { img: 'http://tse1.mm.bing.net/th?id=OIP.M9c40f0765adda5cc0073e1f9d21ea8eeo0&pid=15.1', title: '蓝牙耳机——世界上最小的立体声无线耳机', money: '500.00', sum: '20160', type: '创意订制' },
          { img: 'http://tse1.mm.bing.net/th?id=OIP.M9c40f0765adda5cc0073e1f9d21ea8eeo0&pid=15.1', title: '蓝牙耳机——世界上最小的立体声无线耳机', money: '500.00', sum: '20166', type: 'logod订制' },
          { img: 'http://tse1.mm.bing.net/th?id=OIP.M9c40f0765adda5cc0073e1f9d21ea8eeo0&pid=15.1', title: '蓝牙耳机——世界上最小的立体声无线耳机', money: '500.00', sum: '2016', type: '服装订制' },
          { img: 'http://tse1.mm.bing.net/th?id=OIP.M9c40f0765adda5cc0073e1f9d21ea8eeo0&pid=15.1', title: '蓝牙耳机——世界上最小的立体声无线耳机', money: '500.00', sum: '2016', type: '创意订制' }
        ]
      },
      BuyerList: {
        data: [
          { img: '图1', title: '蓝牙耳机——世界上最小的立体声无线耳机', money: '500.00', time: '2016-05-06' },
          { img: '图1', title: '蓝牙耳机——世界上最小的立体声无线耳机', money: '500.00', time: '2016-05-06' },
          { img: '图1', title: '蓝牙耳机——世界上最小的立体声无线耳机', money: '500.00', time: '2016-05-06' },
          { img: '图1', title: '蓝牙耳机——世界上最小的立体声无线耳机', money: '500.00', time: '2016-05-06' }
        ]
      },
      SellerList: {
        type: 0,
        data: []
      }
    };
  },
  onFilter: function (type) {
    const data1 = [
          { img: '图1', title: '111蓝牙耳机——世界上最小的立体声无线耳机', buyerName: '张三', state: '待发货', type: '科学', status: false },
          { img: '图1', title: '111蓝牙耳机——世界上最小的立体声无线耳机', buyerName: '李四', state: '待发货', type: '日常', status: false },
          { img: '图1', title: '111蓝牙耳机——世界上最小的立体声无线耳机', buyerName: '马武', state: '待发货', type: '科学', status: false },
          { img: '图1', title: '11蓝牙耳机——世界上最小的立体声无线耳机', buyerName: '午马', state: '待发货', type: '科学', status: false }
    ];
    const data2 = [
          { img: '图1', title: '蓝牙耳机——世界上最小的立体声无线耳机', buyerName: '张三', state: '待发货', type: '科学', status: false },
          { img: '图1', title: '蓝牙耳机——世界上最小的立体声无线耳机', buyerName: '李四', state: '待发货', type: '日常', status: false },
          { img: '图1', title: '蓝牙耳机——世界上最小的立体声无线耳机', buyerName: '马武', state: '待发货', type: '科学', status: false },
          { img: '图1', title: '蓝牙耳机——世界上最小的立体声无线耳机', buyerName: '午马', state: '待发货', type: '科学', status: false }
    ];
    const newState = Object.assign({}, this.state);
    newState.SellerList.type = type;
    newState.SellerList.data = type ? data1 : data2;
    this.setState(newState);
  },
  onPush: function (index) {
    const newState = Object.assign({}, this.state);
    newState.SellerList.data[index].status = !newState.SellerList.data[index].status;
    this.setState(newState);
  },
  render: function () {
    const Child = this.props.children;
    const ChildName = Child.type.displayName || Child.type.name;

    let extra;
    switch (ChildName) {
      case 'SellerList':
        extra = {
          onFilter: this.onFilter,
          onPush: this.onPush
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
            extra
          ))
        }
      </div>
    );
  }
});
