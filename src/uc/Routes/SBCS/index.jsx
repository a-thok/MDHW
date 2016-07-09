import React, { Component } from 'react';
import getPath from '../../mixins/getPath.js';

export default class Sbcs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Order: {
        mode: 1
      },
      Pay: {
        type: 0
      }
    };
    this.changeInvoice = this.changeInvoice.bind(this);
    this.collapse = this.collapse.bind(this);
  }
  // 获取订单数据
  // getData() {
  //   const newState = Object.assign({}, this.state.Order);
  // }
  // 风险提示
  collapse() {
    const newState = this.state.Order;
    if (newState.mode === 1) {
      newState.mode--;
    } else {
      newState.mode++;
    }
    this.setState({ Order: newState });
  }
  // 选择支付方式
  changeInvoice(type) {
    const newState = this.state.Pay;
    newState.type = type;
    this.setState({ Pay: newState });
  }
  // 渲染
  render() {
    const Child = this.props.children;
    const path = getPath.call(this, 'Nav');

    let extra;
    switch (path) {
      case 'Order':
        extra = {
          collapse: this.collapse,
          orderAddr: this.props.orderAddr
          // fetchOrder: this.fetchOrder.bind(this),
          // toggleDetail: this.toggleDetail.bind(this)
        };
        break;
      case 'Pay':
        extra = {
          changeInvoice: this.changeInvoice
          // toggleDetail: this.toggleDetail.bind(this)
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
