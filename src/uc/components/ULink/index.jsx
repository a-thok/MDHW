import React from 'react';

export default function ULink(props) {
  const style = {
    display: 'flex'
  };
  return (
    <a href={props.href} style={style}>
      <i className={`fa fa-${props.icon}`}></i>
      <span>{props.text}</span>
      <i className="fa fa-angle-right"></i>
    </a>
  );
}
