import React from 'react';
import FormItemCompares from '../../../../components/FormItemCompares';

export default function Evaluate(props) {
  let commentList = props.data.map((item, index) => (
      <FormItemCompares
        key={index}
        index={index}
        {...item}
        onEvalComplete={props.onEvalComplete}
      />
    ));
  return (
    <div className="List">
      { commentList }
    </div>
  );
}
