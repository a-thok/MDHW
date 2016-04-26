import React from 'react';
import { Link } from 'react-router';

export default function Module(props) {
  return (
    <Link to={props.to} className="module">
      <div className={`module_icon ${props.to}`}></div>
      <div className="module_text">{props.text}</div>
    </Link>
  );
}
