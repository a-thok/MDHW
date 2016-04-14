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
    <div className="uLink" style={style}>
      <div
        className={`fa fa-${props.icon}`}
        style={{
          float: 'left',
          width: '45px',
          padding: '11px 0 5px',
          textAlign: 'center'
        }}
      ></div>
      <div
        className="uLink_right"
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
    </div>
  );
}
