import React from 'react';

export default function Item(props) {
  return (
    <div className="detailGroup">
      <span className="detailGroup_label">{props.name}：</span>
      <span className="detailGroup_text">{props.text}</span>
    </div>
  );
}
