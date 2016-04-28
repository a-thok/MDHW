import React from 'react';

export default function NumGroup(props) {
  return (
    <div className="numGroup">
      <div className="numGroup_name">{props.name}：</div>
      <div>{props.text}</div>
    </div>
  );
}
