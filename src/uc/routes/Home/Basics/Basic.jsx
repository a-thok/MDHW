import React from 'react';
import { Link } from 'react-router';

export default function Basic(props) {
  return (
    <li className="basics_item">
      <Link to={props.to}>
        <div><i className={`fa fa-${props.icon}`}></i></div>
        <div className="basic_text">{props.text}</div>
        <div className="basics_num">{props.num}</div>
      </Link>
    </li>
  );
}
