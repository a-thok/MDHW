import React from 'react';
import { Link } from 'react-router';

export default function Address(props) {
  function handleClick() {
    if (location.hash.indexOf('order=true') !== -1) {
      props.onSelectAddr(props.index);
      location.hash = '#/srdz/order';
    }
  }
  return (
    <li className="address_item">
      <div className="address_item_content" onClick={handleClick}>
        <h3>{props.name} {props.mobile}</h3>
        <address className="address_item_flex">
          <span
            className="address_item_content_text"
            style={{
              display: props.isDefault ? 'block' : 'none'
            }}
          >默认</span>
          {props.province_name} {props.city_name} {props.district_name}{props.address}
        </address>
      </div>
      <div className="address_item_border">
        <Link to={`/settings/address/edit?id=${props.id}`} className="fa fa-edit" onClick={props.onClick} />
      </div>
    </li>
  );
}
