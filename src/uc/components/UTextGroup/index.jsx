import React from 'react';
export default function FormItemText(props) {
  return (
      <dl className="UTextGroup">
        <dt>
          <span className="UTextGroup_span">：</span>
          <span className="UTextGroup_span UTextGroup_span_width">{props.name}</span>
        </dt>
        <dd>{props.text}</dd>
      </dl>
    );
}

