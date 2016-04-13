import React from 'react';

export default function FormButton(props) {
  return (
    <button
      className="formButton"
      style={props.style}
      type={props.type}
    >{props.value}</button>
  );
}
