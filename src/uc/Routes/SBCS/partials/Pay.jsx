import React, { Component } from 'react';

export default class Pay extends Component {
  componentDidMount() {
    this.props.fetchOrder();
  }

  render() {
    return (
      <div>
        <div className="remind"><i className="fa fa-exclamation-triangle"></i>建议您下单前先与卖家确认是否可交易或下单后联系卖家</div>
        <h1 className="trademark_name">商标名称：<span className="trademark_name-cont">{this.props.data.name}</span></h1>
        <ul className="sbcs_order_detl">
          <li><span className="sbcs_order_detl-name">交易方式：</span><span className="sbcs_order_detail-cont">{this.props.data.tradetypeName}</span></li>
          <li><span className="sbcs_order_detl-name">售价：</span><span className="sbcs_order_detail-cont">¥{this.props.data.price}</span></li>
          <li><span className="sbcs_order_detl-name">手续费：</span><span className="sbcs_order_detail-cont">¥0.00</span></li>
          <li> <span className="sbcs_order_detl-name">优惠：</span><span className="sbcs_order_detail-cont">-¥0.00</span></li>
          <li><span className="sbcs_order_detl-name">订金：</span><span className="sbcs_order_detail-cont">¥{this.props.data.price}</span></li>
        </ul>
        <div className="payment">
          {/*
          <div className="paymentList paymentList-weixin">
            <div>
              <p>微信支付</p>
              <p className="paymentList_size">推荐安装微信5.0及以上版本的用户使用</p>
            </div>
            <span>
              <i className={`fa fa-check${this.props.type === 0 ? ' is-show' : ''}`} onClick={() => this.props.changeInvoice(0)}></i>
            </span>
          </div>
          */}
          <div className="paymentList paymentList-zhifubao">
            <div>
              <p>支付宝支付</p>
              <p className="paymentList_size">推荐安装支付宝9.0及以上版本的用户使用</p>
            </div>
            <span>
              <i className={`fa fa-check${this.props.type === 'wapAlipay' ? ' is-show' : ''}`} onClick={() => this.props.changeInvoice('wapAlipay')}></i>
            </span>
          </div>
          {/* <div className="paymentList paymentList-card">
            <div>
              <p>银行卡支付</p>
              <p className="paymentList_size">支付服务由银联提供，无需开通网银</p>
            </div>
            <span>
              <i className={`fa fa-check${this.props.type === 2 ? ' is-show' : ''}`} onClick={() => this.props.changeInvoice(2) }></i>
            </span>
          </div>*/}
        </div>
        <button className="payBtn" type="button" onClick={this.props.payClick}>确认支付￥{this.props.data.price}</button>
      </div>
    );
  }
}
