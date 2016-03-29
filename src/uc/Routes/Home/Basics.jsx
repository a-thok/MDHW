import React from 'react';

export default function Basics(props) {
  return (
    <ul>
      <li className="basicFunc">
        <img src="#" alt="消息" />
        <span>消息</span>
        <span>{props.msg}</span>
      </li>
      <li className="basicFunc">
        <img src="#" alt="好友" />
        <span>好友</span>
        <span>{props.frd}</span>
      </li>
      <li className="basicFunc">
        <img src="#" alt="余额" />
        <span>余额</span>
        <span>￥{props.money.toFixed(2)}</span>
      </li>
    </ul>
  );
}
