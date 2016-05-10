import React from 'react';
export default function TextGroup(props) {
  return (
    <div className="textGroup">
      <span className="textGroup_label">{props.name}：</span>
      {props.text}
    </div>
  );
}
