import React from 'react';

export default function Address(props) {
  const style = {
    fontSize: '18px'
  };
  const textstyle = {
    fontSize: '14px',
    color: '#888'
  };
  return (
    <li className="address_list">
      <div>
        <p className="address_list_msg" style={style}>{props.name}{props.phone}</p>
        <p className="address_list_address" style={textstyle}>{props.province}{props.city}{props.district}</p>
        <address style={textstyle}>{props.address}<i className="fa fa-search" /></address>
      </div>
      <div className="address_center">
        <i
          className="fa"
          style={{
            display: props.selected ? 'block' : 'none'
          }}
        >选中</i>
      </div>
    </li>
  );
}
