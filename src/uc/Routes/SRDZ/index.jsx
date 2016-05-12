import React, { Component } from 'react';
import loadList from '../../mixins/loadList.js';
import fetching from '../../mixins/fetching.js';
import deFavorite from '../../mixins/deFavorite.js';
import getPath from '../../mixins/getPath.js';

export default class Srdz extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
  }

  // 请求关注列表
  fetchFollow() {
    loadList.bind(this)({
      url: '/m/sys/Srdz/Collect/List',
      list: 'Follow'
    });
    fetching.bind(this)('Follow');
  }

  // 请求买家订单列表
  fetchBuyer(states, statee) {
    loadList.bind(this)({
      url: '/m/sys/Srdz/Deal/BuyerList',
      list: 'Buyer',
      params: {
        states,
        statee
      },
      type: states === -1 ? 0 : 1,
      reset: states !== undefined
    });
    fetching.bind(this)('Buyer');
  }

  // 请求卖家订单列表
  fetchSeller(states, statee) {
    loadList.bind(this)({
      url: '/m/sys/Srdz/Deal/SellerList',
      list: 'Seller',
      params: {
        states,
        statee
      },
      type: states === -1 ? 0 : 1,
      reset: states !== undefined,
      cb(items) {
        items.forEach((item) => { item.showDetail = false; });
      }
    });
    fetching.bind(this)('Seller');
  }

  // 显示详情
  toggleDetail(index) {
    const newState = Object.assign({}, this.state.Seller);
    newState.data[index].showDetail = !newState.data[index].showDetail;
    this.setState({ Seller: newState });
  }

  delFollow(id, index) {
    deFavorite.bind(this)('/m/sys/srdz/collect/del', 'Follow', 'id', id, index);
    fetching.bind(this)('Follow');
  }

  orderConfirm(number, index) {
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
  }

  // 渲染
  render() {
    const Child = this.props.children;
    const path = getPath.call(this, 'Nav');

    let extra;
    switch (path) {
      case 'Follow':
        extra = {
          fetchFollow: this.fetchFollow.bind(this),
          delFollow: this.delFollow.bind(this)
        };
        break;
      case 'Seller':
        extra = {
          fetchSeller: this.fetchSeller.bind(this),
          toggleDetail: this.toggleDetail.bind(this)
        };
        break;
      case 'Buyer':
        extra = {
          fetchBuyer: this.fetchBuyer.bind(this),
          orderConfirm: this.orderConfirm.bind(this)
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
            this.state[path],
            extra
          ))
        }
      </div>
    );
  }
}
