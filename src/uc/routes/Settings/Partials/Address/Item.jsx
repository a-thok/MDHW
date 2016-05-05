import React from 'react';
import { Link } from 'react-router';

export default function Address(props) {
  return (
    <li className="address_item">
      <div className="address_item_content">
        <h3>{props.name}{props.phone}</h3>
        <address>{props.province_name} {props.city_name} {props.district_name}</address>
        <address>
          {props.address}
          <Link to={`/settings/address/edit?id=${props.id}`} className="fa fa-edit" onClick={props.onClick} />
        </address>
      </div>
      <i
        className="address_item_check fa fa-check"
        style={{
          display: props.isDefault ? 'block' : 'none'
        }}
      ></i>
    </li>
  );
}
