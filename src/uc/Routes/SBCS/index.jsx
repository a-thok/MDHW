import React, { Component } from 'react';
import getPath from '../../mixins/getPath.js';
import loadList from '../../mixins/loadList.js';
import fetching from '../../mixins/fetching.js';
// import { $cookie } from 'func';

export default class Sbcs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Sbfollow: {
        index: 0,
        fetching: false,
        finished: false,
        data: []
      },
      Order: {
        mode: 1,
        data: {},
        ret: {},
        num: '',
        text: ''
      },
      Pay: {
        data: {},
        type: 'wapAlipay'
      }
    };
    this.changeInvoice = this.changeInvoice.bind(this);
    this.collapse = this.collapse.bind(this);
    this.fetchOrder = this.fetchOrder.bind(this);
    this.postOrder = this.postOrder.bind(this);
    this.payClick = this.payClick.bind(this);
    this.fetchSbfollow = this.fetchSbfollow.bind(this);
  }
  // 请求商标收藏
  fetchSbfollow() {
    loadList.bind(this)({
      url: '/m/Sys/Rshop/Collect/ProductList',
      list: 'Sbfollow'
    });
    fetching.bind(this)('Sbfollow');
  }
  //  备注信息
  textChange(value) {
    const newState = this.state.Order;
    newState.text = value;
    this.setState({ Order: newState });
  }
  // 获取订单数据
  fetchOrder() {
    fetch('/m/Sys/RShop/Order/OrderConfirm', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify({ id: 4/* $cookie().SbcsID */ })
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.success) {
          const newState = Object.assign({}, this.state);
          newState.Order.data = res.result.data;
          newState.Order.ret = res.result.ret;
          newState.Pay.data = res.result.data;
          this.setState(newState);
        }
      });
  }
  // 提交订单
  postOrder() {
    let receiveName;
    let receivePhone;
    let districtCode;
    let receiveAddress;
    if (this.props.orderAddr.province_name) {
      const o = this.props.orderAddr;
      receiveName = o.name;
      receivePhone = o.mobile;
      districtCode = o.district_code;
      receiveAddress = `${o.province_name}省${o.city_name}市${o.district_name}${o.address}`;
    } else {
      const o = this.state.Order.ret;
      receiveName = o.name;
      receivePhone = o.mobile;
      districtCode = o.district_code;
      receiveAddress = `${o.province_name}省${o.city_name}市${o.district_name}${o.address}`;
    }
    fetch('/m/Sys/RShop/Order/ContractAdd', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify({
        receiveName,
        receivePhone,
        districtCode,
        receiveAddress,
        remark: this.state.Order.text,
        ttid: 4/* $cookie().SbcsID */
      })
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.success) {
          const projectID = res.result.id;
          fetch('/m/Sys/Rshop/OrderRshop1/Add', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify({
              projectID
            })
          })
            .then((res) => res.json())
            .then((res) => {
              if (res.success) {
                const newState = this.state.Order;
                newState.num = res.result.number;
                this.setState({ Pay: newState });
                window.location.hash = '#/sbcs/pay';
              }
            });
        }
      });
  }
  // 付款
  payClick() {
    location.href = `http://www.dreamhiway.com/m/Sys/Rshop/OrderRshop1/Alipay?payment=${this.state.Pay.type}&number=${this.state.Order.num}`;
  }
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
      case 'Sbfollow':
        extra = {
          fetchFollow: this.fetchSbfollow
        };
        break;
      case 'Order':
        extra = {
          collapse: this.collapse,
          postOrder: this.postOrder,
          orderAddr: this.props.orderAddr,
          textChange: this.textChange,
          fetchOrder: this.fetchOrder
        };
        break;
      case 'Pay':
        extra = {
          changeInvoice: this.changeInvoice,
          payClick: this.payClick,
          fetchOrder: this.fetchOrder
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
