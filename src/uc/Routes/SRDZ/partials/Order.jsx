import React, { Component } from 'react';

export default class Order extends Component {
  componentDidMount() {
    this.props.fetchOrder();
  }

  handleClick() {
    window.location.hash = '#/settings/address?order=true';
  }

  render() {
    return (
      <div>
        <div className="srdzAddresss" onClick={this.handleClick}>
          <div className="srdzAddresss_content">
            <h3 className="srdzAddresss_content_title">{this.props.orderAddr.name || this.props.content.addr.name}
              <span className="srdzAddresss_content_tel">{this.props.orderAddr.mobile || this.props.content.addr.mobile}</span>
              <span className="srdzAddresss_content_init">默认</span>
            </h3>
            <p className="srdzAddresss_content_text">
              <i className="fa fa-map-marker"></i>
              <span>
                {this.props.orderAddr.province_name || this.props.content.addr.province_name}省{this.props.orderAddr.city_name || this.props.content.addr.city_name}市
                {this.props.orderAddr.district_name || this.props.content.addr.district_name}{this.props.orderAddr.address || this.props.content.addr.address}
              </span>
            </p>
          </div>
          <i className="fa fa-angle-right"></i>
        </div >

        <div className="srdzMsg">
          <div className="srdzMsg_img">
            {
              this.props.content.img ? <img src={`http://${UPLOAD_HOST}/img/${this.props.content.img}`} alt={this.props.content.subject} /> : null
            }
          </div>
          <div className="srdzMsg_text">
            <h3 className="srdzMsg_text_title">{this.props.content.subject}<span>x {this.props.content.count}</span></h3>
            <span>物品描述：{this.props.content.body}</span>
            <span>配送 ￥10</span>
            <span className="srdzMsg_text_money">￥{this.props.content.price}</span>
          </div>
        </div>

        <ul className="srdzList">
          <li className="srdzList_items" onClick={() => this.props.changeInvoice(false)}>
            无需发票 <i className="fa fa-check" style={{ visibility: this.props.invoice ? 'hidden' : 'visible' }}></i>
          </li>
          <li className="srdzList_items" onClick={() => this.props.changeInvoice(true)}>
            需要发票 <i className="fa fa-check" style={{ visibility: this.props.invoice ? 'visible' : 'hidden' }}></i>
          </li>
          <li className="srdzList_items">发票抬头：个人</li>
        </ul>

        <div className="srdzPay">
          <p className="srdzPay_text">实付款：￥{this.props.content.price * this.props.content.count + 10}</p>
          <button className="srdzPay_btn" type="button" onClick={this.props.postOrder}>提交订单</button>
        </div>

      </div>
    );
  }
}
