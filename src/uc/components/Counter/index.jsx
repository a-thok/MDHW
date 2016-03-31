import React from 'react';

export default function Counter(props) {
  let labelStyle = {
    display: 'inline-block',
    width: '1.4em',
    textAlign: 'center',
    border: '1px solid #999',
    background: '#f5f5f5'
  };
  let inputStyle = {
    width: '2.5em',
    height: '1.7em',
    paddingLeft: '.8em',
    verticalAlign: 'top'
  };
  return (
    <p className="FormItemCount">
      <span>{props.name}:</span>
      <span>
        <label style={labelStyle} onClick={props.onReduceNumber}>-</label>
        <input style={inputStyle} type="text" value={props.text} />
        <label style={labelStyle} onClick={props.onAddNumber}>+</label>
      </span>
    </p>
  );
}
