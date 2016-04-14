import React from 'react';
import ListItemEval from '../../../../components/ListItemEval';

export default function Evaluate(props) {
  let commentList = props.data.map((item, index) => (
      <ListItemEval
        key={index}
        index={index}
        {...item}
        onUnfold={props.onUnfold}
        onTooLong={props.onTooLong}
      />
    ));
  return (
    <ul className="list list-eval">
      { commentList }
    </ul>
  );
}
