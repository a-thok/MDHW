import React from 'react';

export default function ListItemPlain(props) {
  return (
    <li className="list-item">
      <p className="list_item_para">
        <span className="list_item_para_header">{props.info}</span>
        <span className="list_item_para_small">{props.small}</span>
      </p>
      <h3 className="list_item_title">{props.title}</h3>
      <p className="list_item_para">
        {
          props.elems.map((elem, index) => React.cloneElement(elem, { key: index }))
        }
      </p>
    </li>
  );
}
