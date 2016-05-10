import React from 'react';

export default function FormGroupSimple(props) {
  return (
    <div className="formGroupSimple">
      <label className="formGroupSimple_label" htmlFor={props.id}>
        {props.label} {props.label ? '：' : null}
      </label>
      {
        props.content || (
          <input
            className="formGroupSimple_input"
            id={props.name}
            name={props.name}
            type="text"
            placeholder={props.placeholder}
            value={props.value}
            onChange={(e) => props.onChange(props.name, e.target.value.trim())}
          />
        )
      }
    </div>
  );
}
