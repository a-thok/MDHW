import React from 'react';
export default function UTitle(props) {
  return (
    <h2 className="uTitle">
      <span className="uTitle_text">{ props.name }</span>
    </h2>
  );
}
