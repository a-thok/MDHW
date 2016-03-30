import React from 'react';

export default function Address(props) {
  return (
    <li className="address">
      <p>{props.name}{props.phone}</p>
      <p>{props.province}{props.city}{props.district}</p>
      <address>{props.address}<i className="fa" /></address>
      <i
        className="fa"
        style={{
          display: props.selected ? 'block' : 'none'
        }}
      >选中</i>
    </li>
  );
}
