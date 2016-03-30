import React from 'react';

export default function Profile(props) {
  return (
    <div className="profile">
      <img src="#" alt={props.name} />
      <h1>{props.name}</h1>
      <p className="profile_msg">账号：{props.phone}{props.company}</p>
      <p className="profile_text">{props.intro}</p>
    </div>
  );
}
