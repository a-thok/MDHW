import React from 'react';
import { Link } from 'react-router';

export default function Navbar(props) {
  return (
    <Link to={props.to} className="navbar">
      <i className={`fa fa-${props.icon}`}></i>
      <div>
        {props.text}
        <span>{props.info}<i className="fa fa-angle-right"></i></span>
      </div>
    </Link>
  );
}
