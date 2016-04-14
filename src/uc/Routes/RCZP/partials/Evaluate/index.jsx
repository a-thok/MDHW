import React from 'react';
import FormItemCompares from '../../../../components/FormItemCompares';

export default function Evaluate(props) {
  let commentList = props.data.map((item, index) => (
      <FormItemCompares
        key={index}
        index={index}
        {...item}
        onUnfold={props.onUnfold}
        onTooLong={props.onTooLong}
      />
    ));
  return (
    <div className="List">
      { commentList }
    </div>
  );
}
