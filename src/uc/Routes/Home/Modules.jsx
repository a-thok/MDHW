import React from 'react';
import { Link } from 'react-router';
import rczp from '../../img/rczp.png';
import kjfw from '../../img/kjfwlqt.png';
import zb from '../../img/zb.png';
import zc from '../../img/zc.png';
import cqbh from '../../img/cqbh.png';
import cygc from '../../img/cygc.png';

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
        <li className="modules_item">
          <Link to="/rczp" className="module">
            <figure className="modules_item_fig" style={figureStyle}>
              <div className="rczp"><img style={imgStyle} src={rczp} alt="人才招聘" /></div>
              <figcaption className="modules_item_fig_cap">人才招聘</figcaption>
            </figure>
          </Link>
        </li>
        <li className="modules_item">
          <Link to="/zc" className="module">
            <figure className="modules_item_fig" style={figureStyle}>
              <div className="zc"><img style={imgStyle} src={zc} alt="众筹" /></div>
              <figcaption className="modules_item_fig_cap">众筹</figcaption>
            </figure>
          </Link>
        </li>
        <li className="modules_item">
          <Link to="/cysj" className="module">
            <figure className="modules_item_fig" style={figureStyle}>
              <div className="cysj"><img style={imgStyle} src={kjfw} alt="创意设计" /></div>
              <figcaption className="modules_item_fig_cap">创意设计</figcaption>
            </figure>
          </Link>
        </li>
        <li className="modules_item">
          <Link to="/srdz" className="module">
            <figure className="modules_item_fig" style={figureStyle}>
              <div className="srdz"><img style={imgStyle} src={cqbh} alt="私人定制" /></div>
              <figcaption className="modules_item_fig_cap">私人定制</figcaption>
            </figure>
          </Link>
        </li>
      </ul>
      <ul className="modules">
        <li className="modules_item">
          <Link to="/zb" className="module">
            <figure className="modules_item_fig" style={figureStyle}>
              <div className="zb"><img style={imgStyle} src={zb} alt="众包" /></div>
              <figcaption className="modules_item_fig_cap">众包</figcaption>
            </figure>
          </Link>
        </li>
        <li className="modules_item">
          <Link to="/rczp" className="module">
            <figure className="modules_item_fig" style={figureStyle}>
              <div className="cygc"><img style={imgStyle} src={cygc} alt="创意工厂" /></div>
              <figcaption className="modules_item_fig_cap">创意工厂</figcaption>
            </figure>
          </Link>
        </li>
        <li className="modules_item">
          <Link to="/rczp" className="module">
            <figure className="modules_item_fig" style={figureStyle}>
              <div className="kjfw"><img style={imgStyle} src={kjfw} alt="会计服务" /></div>
              <figcaption className="modules_item_fig_cap">会计服务</figcaption>
            </figure>
          </Link>
        </li>
        <li className="modules_item">
          <Link to="/rczp" className="module">
            <figure className="modules_item_fig" style={figureStyle}>
              <div className="cqbh"><img style={imgStyle} src={cqbh} alt="产权保护" /></div>
              <figcaption className="modules_item_fig_cap">产权保护</figcaption>
            </figure>
          </Link>
        </li>
      </ul>
    </div>
  );
}
