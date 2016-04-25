import React from 'react';

export default function ListTab(props) {
  return (
    <li
      className={ `listTab${props.active === props.type ? ' is-active' : ''}` }
      onClick={() => props.handleClick(props.type)}
    >{props.text}</li>
  );
}
