import React from 'react';
export default function FormItemText(props) {
  return (
      <dl
        className="UTextGroup"
        style={{
          overflow: 'hidden',
          padding: '.6em 0'
        }}
      >
        <dt
          style={{
            float: 'left',
            width: '30%'
          }}
        >
          <span style={{ float: 'right' }}>：</span>
          <span
            style={{
              float: 'right',
              width: '70px'
            }}
          >{props.name}</span>
        </dt>
        <dd
          style={{
            float: 'left',
            width: '68%',
            marginLeft: '5px'
          }}
        >{props.text}</dd>
      </dl>
    );
}

