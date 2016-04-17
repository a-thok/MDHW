import React from 'react';

export default function Profile(props) {
  return (
    <div className="profile">
      <figure className="profile_figure">
        <img src="http://upload.wikimedia.org/wikipedia/zh/9/9a/Lapras.gif" alt={props.name} />
        <figcaption className="profile_title">{props.name}</figcaption>
      </figure>
      <p className="profile_para">
        <span>{`账号：${props.phone}`}</span>
        <span style={{ marginLeft: '1em' }}>{props.company}</span>
      </p>
      <p className="profile_para">{props.intro}</p>
      <i className="fa fa-edit"></i>
    </div>
  );
}
