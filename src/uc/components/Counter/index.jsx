import React from 'react';

export default function Counter(props) {
  return (
    <p className="counter">
      <span>{props.name}:</span>
      <span>
        <label className="counter_label" onClick={props.onReduceNumber}>-</label>
        <input className="counter_input" type="text" value={props.text} />
        <label className="counter_label" onClick={props.onAddNumber}>+</label>
      </span>
    </p>
  );
}
