import React from 'react';

export default function Profile(props) {
  return (
    <div
      className="profile"
      style={{
        position: 'relative',
        lineHeight: '2',
        textAlign: 'center'
      }}
    >
      <img
        src="#" alt={props.name}
        style={{
          width: '25vw',
          height: '25vw',
          border: '5px solid #fff',
          borderRadius: '50%'
        }}
      />
      <h1>{props.name}</h1>
      <p>
        <span>{`账号：${props.phone}`}</span>
        <span style={{ marginLeft: '1em' }}>{props.company}</span>
      </p>
      <p
        style={{
          width: '95%',
          textAlign: 'left',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap'
        }}
      >{props.intro}</p>
      <i
        className="fa fa-edit"
        style={{
          position: 'absolute',
          right: '10px',
          bottom: '10px'
        }}
      ></i>
    </div>
  );
}
