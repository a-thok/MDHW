import React from 'react';

export default function Modules() {
  let imgStyle = {
    width: '14vw',
    height: '14vw'
  };
  return (
    <div className="modulesWrap">
      <ul className="modules">
        <li className="module">
          <span><img style={imgStyle} src="#" alt="会计服务" /></span>
          <span>会计服务</span>
        </li>
        <li className="module">
          <span><img style={imgStyle} src="#" alt="人才招聘" /></span>
          <span>人才招聘</span>
        </li>
        <li className="module">
          <span><img style={imgStyle} src="#" alt="众筹" /></span>
          <span>众筹</span>
        </li>
        <li className="module">
          <span><img style={imgStyle} src="#" alt="众包" /></span>
          <span>众包</span>
        </li>
      </ul>
      <ul className="modules">
        <li className="module">
          <span><img style={imgStyle} src="#" alt="会计服务" /></span>
          <span>会计服务</span>
        </li>
        <li className="module">
          <span><img style={imgStyle} src="#" alt="人才招聘" /></span>
          <span>人才招聘</span>
        </li>
        <li className="module">
          <span><img style={imgStyle} src="#" alt="众筹" /></span>
          <span>众筹</span>
        </li>
        <li className="module">
          <span><img style={imgStyle} src="#" alt="众包" /></span>
          <span>众包</span>
        </li>
      </ul>
    </div>
  );
}
