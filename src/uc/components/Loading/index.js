import React from 'react';

export default function Loading(props) {
  let loadText;
  if (props.dataLen < 1) {
    loadText = '暂无数据';
  } else {
    loadText = props.finished ? '没有了哦' : '';
  }
  return (
    <div className="list_load">
      <i
        className="fa fa-spinner fa-pulse"
        style={{ display: props.finished ? 'none' : 'inline' }}
      ></i>
      <span className="list_load_text">
        {loadText}
      </span>
    </div>
  );
}
