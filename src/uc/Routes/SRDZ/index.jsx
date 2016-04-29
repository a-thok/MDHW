import React from 'react';
import loadList from '../../mixins/loadList.js';
import fetching from '../../mixins/fetching.js';
import deFavorite from '../../mixins/deFavorite.js';

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
  fetchBuyer: function (states, statee) {
    loadList.bind(this)({
      url: '/m/sys/Srdz/Deal/BuyerList',
      list: 'Buyer',
      params: {
        states,
        statee
      },
      type: states === -1 ? 0 : 1,
      param: 'state',
      reset: states !== undefined
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
  toggleDetail: function (index) {
    const newState = Object.assign({}, this.state.Seller);
    newState.data[index].showDetail = !newState.data[index].showDetail;
    this.setState({ Seller: newState });
  },
  delFollow: function (id, index) {
    deFavorite.bind(this)('/m/sys/srdz/collect/del', 'Follow', 'id', id, index);
    fetching.bind(this)('Follow');
  },
  orderConfirm: function (number, index) {
    console.log(index);
    fetch('/m/Sys/Srdz/Deal/Confirm', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ number }),
      credentials: 'include'
    })
    .then(res => res.json())
    .then(res => {
      if (res.success) {
        const newState = Object.assign({}, this.state.Buyer);
        newState.data[index].state = 3;
        newState.data[index].stateName = '已收货';
        this.setState({ Buyer: newState });
      } else {
        alert('服务器错误，请稍后重试');
      }
    });
  },
  // 渲染
  render: function () {
    const Child = this.props.children;
    const ChildName = Child.type.displayName || Child.type.name;

    let extra;
    switch (ChildName) {
      case 'Follow':
        extra = {
          fetchFollow: this.fetchFollow,
          delFollow: this.delFollow
        };
        break;
      case 'Seller':
        extra = {
          fetchSeller: this.fetchSeller,
          toggleDetail: this.toggleDetail
        };
        break;
      case 'Buyer':
        extra = {
          fetchBuyer: this.fetchBuyer,
          orderConfirm: this.orderConfirm
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
