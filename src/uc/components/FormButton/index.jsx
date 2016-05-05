import React from 'react';

export default function FormButton(props) {
  return (
    <div className="formButtonWrapper">
      <button
        className="formButton"
        type={props.type}
      >{props.value}</button>
    </div>
  );
}
