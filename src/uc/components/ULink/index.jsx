import React from 'react';

export default function ULink(props) {
  const style = {
    display: 'block',
    width: '100%',
    overflow: 'hidden',
    fontSize: '16px',
    color: '#333',
    textDecoration: 'none'
  };
  return (
    <a className="ulink" href={props.href} style={style}>
      <div
        className={`fa fa-${props.icon}`}
        style={{
          float: 'left',
          width: '45px',
          padding: '8px 0',
          textAlign: 'center'
        }}
      ></div>
      <div
        className="ulink_right"
        style={{
          padding: '8px 0',
          overflow: 'hidden'
        }}
      >
        <span
          style={{
            display: 'inline-block',
            verticalAlign: 'middle'
          }}
        >{props.text}</span>
        <i
          className="fa fa-angle-right"
          style={{
            float: 'right',
            marginRight: '15px'
          }}
        ></i>
      </div>
    </a>
  );
}
