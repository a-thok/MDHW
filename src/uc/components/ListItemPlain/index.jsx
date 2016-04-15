import React from 'react';

export default function ListItemPlain(props) {
  return (
    <li className="list-item list-item-pain">
      <p className="list-pain_content"><span className="list-pain_border">{props.info}</span><span>{props.small}</span></p>
      <h3 className="list-pain_title">{props.title}</h3>
      <p className="list-pain_content list-pain_content-text">{props.elems}</p>
    </li>
  );
}
