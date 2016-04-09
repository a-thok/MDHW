import React from 'react';

export default function Input(props) {
  return (
    <input className="Input" type="text" placeholder="备注信息填写" value={props.text} />
  );
}
