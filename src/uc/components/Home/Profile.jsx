import React from 'react';

export default function Profile(props) {
  return (
    <div className="profile">
      <img src="#" alt={props.name} />
      <h1>{props.name}</h1>
      <p>账号：{props.phone} {props.company}</p>
      <p>{props.intro}</p>
    </div>
  );
}
