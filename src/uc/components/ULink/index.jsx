import React from 'react';

export default function ULink(props) {
  return (
    <div className="uLink">
      <div className={`fa fa-${props.icon} uLink_logo`}></div>
      <div className="uLink_right">
        <span>{props.text}</span>
        <i className="fa fa-angle-right"></i>
      </div>
    </div>
  );
}
