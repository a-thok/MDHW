import React from 'react';

export default function FormItemTextRight(props) {
  return (
    <div className="formItemTextRight">
      <p className="formItemTextRight_name">{props.name}:</p>
      <p>{props.font}{props.text}</p>
    </div>
  );
}
