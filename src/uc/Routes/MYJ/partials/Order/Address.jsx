import React from 'react';

export default function Address(props) {
  console.log(props.orderAddr);
  return (
    <a className="myjaddress" href="#/settings/address?order=myj">
      <div className="addressUser">
        <p className="addressUser_msg">
          <span>收货人：{props.orderAddr.name || props.stores.addr.name || '请选择'}</span>
          <span>{props.orderAddr.mobile || props.stores.addr.mobile || ''}</span>
        </p>
        <div className="addressUser_text">
          <span><i className="fa fa-map-marker"></i></span>
          收货地址：
          {props.orderAddr.province_name || props.stores.addr.province_name || 'xx'}省{props.orderAddr.city_name || props.stores.addr.city_name || 'xx'}市
          {props.orderAddr.district_name || props.stores.addr.district_name || 'xx'}{props.orderAddr.address || props.stores.addr.address || 'xx'}
        </div>
      </div>
      <span className="address_span"><i className="fa fa-angle-right"></i></span>
    </a>
  );
}
