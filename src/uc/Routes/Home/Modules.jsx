import React from 'react';
import { Link } from 'react-router';

export default function Modules() {
  const imgStyle = {
    width: '100%'
  };
  const figureStyle = {
    textAlign: 'center'
  };
  return (
    <div className="modulesWrap">
      <ul className="modules">
        <li>
          <Link to="/rczp" className="module">
            <figure style={figureStyle}>
              <img style={imgStyle} src="http://img1.3lian.com/gif/more/11/201209/03e4eb4be19da810a4567d7f40e9f0c0.jpg" alt="人才招聘" />
              <figcaption>人才招聘</figcaption>
            </figure>
          </Link>
        </li>
        <li>
          <Link to="/zc" className="module">
            <figure style={figureStyle}>
              <img style={imgStyle} src="http://img1.3lian.com/gif/more/11/201209/03e4eb4be19da810a4567d7f40e9f0c0.jpg" alt="众筹" />
              <figcaption>众筹</figcaption>
            </figure>
          </Link>
        </li>
        <li>
          <Link to="/cysj" className="module">
            <figure style={figureStyle}>
              <img style={imgStyle} src="http://img1.3lian.com/gif/more/11/201209/03e4eb4be19da810a4567d7f40e9f0c0.jpg" alt="创意设计" />
              <figcaption>创意设计</figcaption>
            </figure>
          </Link>
        </li>
        <li>
          <Link to="/srdz" className="module">
            <figure style={figureStyle}>
              <img style={imgStyle} src="http://img1.3lian.com/gif/more/11/201209/03e4eb4be19da810a4567d7f40e9f0c0.jpg" alt="私人定制" />
              <figcaption>私人定制</figcaption>
            </figure>
          </Link>
        </li>
      </ul>
      <ul className="modules">
        <li>
          <Link to="/zb" className="module">
            <figure style={figureStyle}>
              <img style={imgStyle} src="http://img1.3lian.com/gif/more/11/201209/03e4eb4be19da810a4567d7f40e9f0c0.jpg" alt="众包" />
              <figcaption>众包</figcaption>
            </figure>
          </Link>
        </li>
        <li>
          <Link to="/rczp" className="module">
            <figure style={figureStyle}>
              <img style={imgStyle} src="http://img1.3lian.com/gif/more/11/201209/03e4eb4be19da810a4567d7f40e9f0c0.jpg" alt="人才招聘" />
              <figcaption>人才招聘</figcaption>
            </figure>
          </Link>
        </li>
        <li>
          <Link to="/rczp" className="module">
            <figure style={figureStyle}>
              <img style={imgStyle} src="http://img1.3lian.com/gif/more/11/201209/03e4eb4be19da810a4567d7f40e9f0c0.jpg" alt="人才招聘" />
              <figcaption>人才招聘</figcaption>
            </figure>
          </Link>
        </li>
        <li>
          <Link to="/rczp" className="module">
            <figure style={figureStyle}>
              <img style={imgStyle} src="http://img1.3lian.com/gif/more/11/201209/03e4eb4be19da810a4567d7f40e9f0c0.jpg" alt="人才招聘" />
              <figcaption>人才招聘</figcaption>
            </figure>
          </Link>
        </li>
      </ul>
    </div>
  );
}
