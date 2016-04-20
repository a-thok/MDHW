import React from 'react';

export default function FormInput(props) {
  const handleChange = function (e) {
    let text = e.target.value.trim();
    props.onChange(text, props.field);
  };
  const handleKeyup = function (e) {
    e.preventDefault();
    let text = e.target.value.trim();
    props.onKeyup(text, props.field);
  };
  return (
    <ul style={{ backgroundColor: '#fff', border: '1px solid #ccc', marginBottom: '1em' }}>
      <li style={{ margin: '0 2em', padding: '10px 0' }}>
            <input
              type="text"
              placeholder={props.placeholder}
              value={props.value}
              style={{
                border: '0'
              }}
              onChange={handleChange}
              onKeyUp={handleKeyup}
            />
            <span>{props.btn}</span>
       </li>
       {props.li}
    </ul>
  );
}
