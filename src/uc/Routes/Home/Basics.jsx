import React from 'react';
import { Link } from 'react-router';

export default function Basics(props) {
  let liStyle = {
    float: 'left',
    width: '33.3333%',
    textAlign: 'center',
    height: '100%'
  };
  return (
    <ul
      className="basics"
      style={{
        overflow: 'hidden'
      }}
    >
      <li style={liStyle}>
        <Link to="/">
          <section><i className="fa fa-commenting-o"></i></section>
          <section>消息</section>
          <section className="basics_num">{props.msg}</section>
        </Link>
      </li>
      <li style={liStyle}>
        <Link to="/">
          <section><i className="fa fa-user"></i></section>
          <section>好友</section>
          <section className="basics_num">{props.frd}</section>
        </Link>
      </li>
      <li style={liStyle}>
        <Link to="/">
          <section><i className="fa fa-rmb"></i></section>
          <section>余额</section>
          <section className="basics_num">￥{props.money.toFixed(2)}</section>
        </Link>
      </li>
    </ul>
  );
}
