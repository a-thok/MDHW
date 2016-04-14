import React from 'react';

export default function ListItemPlain(props) {
  return (
    <ul className="FormItemProList">
      <li><span>{props.tLeft}</span><span>{props.tRight}</span></li>
      <li>{props.m}</li>
      <li><span>{props.bLeft}</span><span>{props.bMiddle}</span><span>{props.bRight}</span></li>
    </ul>
  );
}
