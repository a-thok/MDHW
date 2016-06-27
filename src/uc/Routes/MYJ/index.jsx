import React, { Component } from 'react';
import { $cookie } from 'func';
import getPath from '../../mixins/getPath.js';

export default class Myj extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Order: {
        stores: [],
        payment: false,
        price: 0,
        data: {
          p: '',
          payment: 'Storepay',
          dispatch: '',
          receiveName: props.orderAddr.name || '请选择',
          receivePhone: props.orderAddr.mobile || '',
          receiveAddress: `${props.orderAddr.province_name || 'xx'}省${props.orderAddr.city_name || 'xx'}市${props.orderAddr.district_name || 'xx'}${props.orderAddr.address || 'xx'}`
        }
      }
    };
    this.getData = this.getData.bind(this);
    this.switchPanels = this.switchPanels.bind(this);
    this.paymentPanel = this.paymentPanel.bind(this);
    this.selectionPaymode = this.selectionPaymode.bind(this);
    this.postOrder = this.postOrder.bind(this);
  }
  // 获取订单数据
  getData() {
    const newState = Object.assign({}, this.state.Order);
    console.log(decodeURIComponent((JSON.parse($cookie().myjdata))));
    newState.stores = JSON.parse($cookie().myjdata || '[[{}], [{}], [{}]]');
    newState.data.p = $cookie().myjdata || '1';
    // 总价格
    let price = 0;
    let priceAll = 0;
    const datas = this.state.Order.stores.data;
    const items = datas.item;
    for (let i = 0; i < datas.length; i++) {
      for (let j = 0; j < items.length; j++) {
        price = price + items[i].price * items[i].count;
      }
      priceAll = priceAll + price;
    }
    newState.price = priceAll;
    this.setState({ Order: newState });
  }
  // 选择
  switchPanels(panel, index) {
    const newState = Object.assign({}, this.state.Order);
    newState.stores[index][panel] = !newState.stores[index][panel];
    this.setState({ Order: newState });
  }
  // 打开选择支付面板
  paymentPanel(bool) {
    const newState = Object.assign({}, this.state.Order);
    newState.payment = bool;
    this.setState({ Order: newState });
  }
  // 选择付款模式
  selectionPaymode(paymode) {
    const newState = Object.assign({}, this.state.Order);
    newState.data.payment = paymode;
    this.setState({ Order: newState });
  }
  // 提交订单
  postOrder() {
    fetch('/m/sys/o2o/order/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify(this.state.Order.data)
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.success) {
          console.log(1);
          // window.location.hash = '#/myj/pay';
        }
      });
  }
  // 渲染
  render() {
    const Child = this.props.children;
    const path = getPath.call(this, 'Nav');

    let extra;
    switch (path) {
      case 'Order':
        extra = {
          getData: this.getData,
          switchPanels: this.switchPanels,
          paymentPanel: this.paymentPanel,
          postOrder: this.postOrder,
          orderAddr: this.props.orderAddr,
          selectionPaymode: this.selectionPaymode
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
