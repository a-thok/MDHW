import React from 'react';
export default function FormItemTitle(props) {
  return (
    <p className="FormItemTitle">
      <span className="FormItemTitleSpan" style={{ paddingLeft: '1em' }}>{ props.name }</span>
    </p>
  );
}
