import React from 'react';

export default function FormButton(props) {
  return (
    <button
      className="formButton"
      type={props.type}
    >{props.value}</button>
  );
}
