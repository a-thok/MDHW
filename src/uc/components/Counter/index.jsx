import React from 'react';

export default function Counter(props) {
  return (
    <div className="counter">
      <label className="counter_label" onClick={() => props.onClick(-1)}>-</label>
      <input className="counter_input" type="text" value={props.text} />
      <label className="counter_label" onClick={() => props.onClick(+1)}>+</label>
    </div>
  );
}
