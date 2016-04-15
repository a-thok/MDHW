import React from 'react';

export default function UDetailGroup(props) {
  return (
    <dl>
      <dd className="DetailGroup_item">
        <span className="item_color">{props.name}:</span> {props.text}
      </dd>
    </dl>
  );
}
