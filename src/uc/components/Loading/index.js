import React from 'react';

export default function Loading(props) {
  return (
    <div className="list_load">
      <i
        className="fa fa-spinner fa-pulse"
        style={{ display: props.finished ? 'none' : 'inline' }}
      ></i>
      <span className="list_load_text">
        {props.finished ? '没有更多项目' : '加载中...'}
      </span>
    </div>
  );
}
