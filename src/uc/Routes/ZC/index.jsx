import React from 'react';
import loadList from '../../mixins/loadList.js';
import fetching from '../../mixins/fetching.js';

export default React.createClass({
  getInitialState: function () {
    return {
      Follow: {
        index: 0,
        fetching: false,
        finished: false,
        data: []
      },
      Support: {
        index: 0,
        fetching: false,
        finished: false,
        data: []
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
  // 请求关注列表
  fetchFollow: function () {
    loadList.bind(this)({
      url: '/m/sys/ZC/Collect/List',
      list: 'Follow'
    });
    fetching.bind(this)('Follow');
  },
  // 请求支持列表
  fetchSupport: function () {
    loadList.bind(this)({
      url: '/m/sys/ZC/Deal/SupportList',
      list: 'Support'
    });
    fetching.bind(this)('Support');
  },
  // 请求订单列表
  fetchOrder: function (type, reset) {
    loadList.bind(this)({
      url: '/m/sys/ZC/Deal/InvestList',
      list: 'Order',
      type,
      param: 'state',
      cb: function (items) {
        items.forEach((item) => {item.showDetail = false;});
      },
      reset
    });
    fetching.bind(this)('Order');
  },
  // 显示详情
  showDetail: function (index) {
    const newState = Object.assign({}, this.state.Order);
    newState.data[index].showDetail = !newState.data[index].showDetail;
    this.setState(newState);
  },
  // 渲染
  render: function () {
    const Child = this.props.children;
    const ChildName = Child.type.displayName || Child.type.name;

    let extra;
    switch (ChildName) {
      case 'Order':
        extra = {
          fetchOrder: this.fetchOrder,
          showDetail: this.showDetail
        };
        break;
      case 'Follow':
        extra = {
          fetchFollow: this.fetchFollow
        };
        break;
      case 'Support':
        extra = {
          fetchSupport: this.fetchSupport
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
