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
  onFollowList: function () {
    loadList.bind(this)({
      url: '/m/sys/ZC/Collect/List',
      list: 'Follow'
    });
    fetching.bind(this)('Follow');
  },
  onSupportList: function () {
    loadList.bind(this)({
      url: '/m/sys/ZC/Deal/SupportList',
      list: 'Support'
    });
    fetching.bind(this)('Support');
  },
  onOrderList: function (type, reset) {
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
  onShowDetail: function (index) {
    const newState = Object.assign({}, this.state.Order);
    newState.data[index].showDetail = !newState.data[index].showDetail;
    this.setState(newState);
  },
  render: function () {
    const Child = this.props.children;
    const ChildName = Child.type.displayName || Child.type.name;

    let extra;
    switch (ChildName) {
      case 'Order':
        extra = {
          onOrderList: this.onOrderList,
          onShowDetail: this.onShowDetail
        };
        break;
      case 'Follow':
        extra = {
          onFollowList: this.onFollowList
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
