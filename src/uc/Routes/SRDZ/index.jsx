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
      Buyer: {
        index: 0,
        fetching: false,
        finished: false,
        type: 0,
        data: []
      },
      Seller: {
        index: 0,
        fetching: false,
        finished: false,
        type: 0,
        data: []
      }
    };
  },
  // 请求关注列表
  fetchFollow: function () {
    loadList.bind(this)({
      url: '/m/sys/Srdz/Collect/List',
      list: 'Follow'
    });
    fetching.bind(this)('Follow');
  },
  // 请求买家订单列表
  fetchBuyer: function (type) {
    loadList.bind(this)({
      url: '/m/sys/Srdz/Deal/BuyerList',
      list: 'Buyer',
      type: type === undefined ? 0 : type,
      param: 'state',
      reset: type !== undefined
    });
    fetching.bind(this)('Buyer');
  },
  // 请求卖家订单列表
  fetchSeller: function (type, reset) {
    loadList.bind(this)({
      url: '/m/sys/Srdz/Deal/SellerList',
      list: 'Seller',
      type,
      cb: function (items) {
        items.forEach((item) => {item.showDetail = false;});
      },
      param: 'state',
      reset
    });
    fetching.bind(this)('Seller');
  },
  // 显示详情
  showDetail: function (index) {
    const newState = Object.assign({}, this.state.Seller);
    newState.data[index].showDetail = !newState.data[index].showDetail;
    this.setState(newState);
  },
  // 渲染
  render: function () {
    const Child = this.props.children;
    const ChildName = Child.type.displayName || Child.type.name;

    let extra;
    switch (ChildName) {
      case 'Follow':
        extra = {
          fetchFollow: this.fetchFollow
        };
        break;
      case 'Seller':
        extra = {
          fetchSeller: this.fetchSeller,
          showDetail: this.showDetail
        };
        break;
      case 'Buyer':
        extra = {
          fetchBuyer: this.fetchBuyer
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
