import React from 'react';

export default function FormItemInput(props) {
  return (
      <dl className="formItemInput">
        <dt className="formItemInput_dt">{`${props.name}:`}</dt>
        <dd className="formItemInput_dd">
          <input
            className="formItemInput_dd_input"
            type="text"
            value={props.text}
            placeholder={props.placeholder}
          />
        </dd>
      </dl>
    );
}
