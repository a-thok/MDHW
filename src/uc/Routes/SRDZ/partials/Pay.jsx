import React from 'react';

export default function Pay(props) {
  function handleClick(payment) {
    location.href = `http://www.dreamhiway.com/m/sys/srdz/order/alipay?payment=${payment}&number=${props.number}`;
  }

  return (
    <div className="payList">
      <p className="payList_order">订单金额<span>{props.money}元</span></p>
      <div className="payList_pay" onClick={() => handleClick('wapAlipay')}>
        <p className="payList_pay_money">支付宝支付<i className="fa fa-angle-right"></i></p>
      </div>
    </div>
  );
}
