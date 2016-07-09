import React, { Component } from 'react';
import getPath from '../../mixins/getPath.js';

export default class Sbcs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Order: {},
      Pay: {
        type: 0
      }
    };
    this.changeInvoice = this.changeInvoice.bind(this);
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
