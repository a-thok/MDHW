import React, { Component } from 'react';
import loadList from '../../mixins/loadList.js';
import fetching from '../../mixins/fetching.js';

export default class Zc extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
  }

  // 请求关注列表
  fetchFollow() {
    loadList.bind(this)({
      url: '/m/sys/ZC/Collect/List',
      list: 'Follow'
    });
    fetching.bind(this)('Follow');
  }

  // 请求支持列表
  fetchSupport() {
    loadList.bind(this)({
      url: '/m/sys/ZC/Deal/SupportList',
      list: 'Support'
    });
    fetching.bind(this)('Support');
  }

  // 请求订单列表
  fetchOrder(states, statee) {
    loadList.bind(this)({
      url: '/m/sys/ZC/Deal/InvestList',
      list: 'Order',
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
    fetching.bind(this)('Order');
  }

  // 显示详情
  toggleDetail(index) {
    const newState = Object.assign({}, this.state.Order);
    newState.data[index].showDetail = !newState.data[index].showDetail;
    this.setState(newState);
  }

  // 渲染
  render() {
    const Child = this.props.children;
    const ChildName = Child.type.displayName || Child.type.name;

    let extra;
    switch (ChildName) {
      case 'Order':
        extra = {
          fetchOrder: this.fetchOrder.bind(this),
          toggleDetail: this.toggleDetail.bind(this)
        };
        break;
      case 'Follow':
        extra = {
          fetchFollow: this.fetchFollow.bind(this)
        };
        break;
      case 'Support':
        extra = {
          fetchSupport: this.fetchSupport.bind(this)
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
}
