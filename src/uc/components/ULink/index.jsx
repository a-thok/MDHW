import React from 'react';

export default function ULink(props) {
  const style = {
    display: 'block',
    width: '100%',
    overflow: 'hidden',
    fontSize: '16px',
    padding: '.6em 0',
    textDecoration: 'none',
    color: '#333'
  };
  const floatLeft = {
    float: 'left',
    fontSize: '25px',
    marginRight: '10px'
  };
  const floatRight = {
    float: 'right',
    fontSize: '25px',
    color: '#888'
  };
  return (
    <a className="ulink_link" href={props.href} style={style}>
      <i className={`fa fa-${props.icon}`} style={ floatLeft }></i>
      <span>{props.text}</span>
      <i className="fa fa-angle-right" style={ floatRight }></i>
    </a>
  );
}
