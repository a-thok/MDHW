import React from 'react';

export default function FormCheck(props) {
  return (
    <div className="formCheck">
      <input
        className="formCheck_input"
        id={props.name}
        name={props.name}
        type="checkbox"
        checked={props.value}
        onChange={(e) => props.onChange(props.name, e.target.checked)}
      />
      <label className="formCheck_emu fa fa-check" htmlFor={props.name}>
      </label>
      <label htmlFor={props.name}>{props.text}</label>
    </div>
  );
}
