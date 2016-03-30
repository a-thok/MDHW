import React from 'react';

export default function FormItemTextRight(props) {
  const textstyle = {
    color: '#888'
  };
  return (
    <div className="FormItemTextRight">
      <p className="" style={textstyle}>{props.name}:</p>
      <p className="">{props.font}{props.text}</p>
    </div>
  );
}
