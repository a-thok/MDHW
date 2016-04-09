import React from 'react';

export default function FormButton(props) {
  return (
    <button className="formButton" type="button">{props.value}</button>
  );
}
