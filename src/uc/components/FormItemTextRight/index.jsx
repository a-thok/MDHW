import React from 'react';

export default function FormItemTextRight(props) {
  return (
    <div className="FormItemTextRight">
      <p className="">{props.name}:</p>
      <p className="">{props.font}{props.text}</p>
    </div>
  );
}
