import React, { Component } from 'react';
import Store from './Store.jsx';
import Address from './Address.jsx';

export default class Order extends Component {
  componentDidMount() {
    this.props.getData();
  }
  render() {
    return (
      <div className="order">
        <Address orderAddr={this.props.orderAddr} />
        <p className="businessList_item_pay">
          <span>支付方式</span>
          <span onClick={() => this.props.paymentPanel(true)}>
            {(this.props.data.payment === 'Alipay') ? '到店支付' : '网上支付'}<i className="fa fa-angle-right"></i>
          </span>
        </p>
        <p className="businessList_item_DC">
          <span>配送方式</span>
          <span>
            物流、快递<i className="fa fa-angle-right"></i>
          </span>
        </p>

        <div className="paymode" style={{ display: this.props.payment ? 'block' : 'none' }}>
          <div className="paymodeText">
            <p className="paymodeText_title">支付方式</p>
            <p className="paymodeText_mode">
              <span>网上支付</span>
              <span onClick={() => this.props.selectionPaymode('Storepay')}>
                <i className={(this.props.data.payment === 'Storepay') ? 'fa fa-check is-click' : 'fa fa-check'}></i>
              </span>
            </p>
            <p className="paymodeText_mode">
              <span>到店支付</span>
              <span onClick={() => this.props.selectionPaymode('Alipay')}>
                <i className={(this.props.data.payment === 'Alipay') ? 'fa fa-check is-click' : 'fa fa-check'}></i>
              </span>
            </p>
            <button className="paymodeText_btn" type="button" onClick={() => this.props.paymentPanel(false)}>关闭</button>
          </div>
        </div>

        <ul className="businessList">
          {this.props.stores.map((store, index) => (
            <Store
              switchPanels={this.props.switchPanels}
              selectionMode={this.props.selectionMode}
              {...store}
              index={index}
            />
          ))}
        </ul>

        <div className="submitOrder">
          <span>合计：<span className="submitOrder-money">￥{this.props.price}</span></span>
          <button className="submitOrder_btn" type="button" onClick={this.props.postOrder}>提交订单</button>
        </div>
      </div>
    );
  }
}
