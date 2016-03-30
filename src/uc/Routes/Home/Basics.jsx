import React from 'react';

export default function Basics(props) {
  return (
    <ul className="basicList">
      <li className="basicFunc">
        <span><img className="basicFunc_img" src="#" alt="消息" /></span>
        <span>消息</span>
        <span>{props.msg}</span>
      </li>
      <li className="basicFunc">
        <span><img className="basicFunc_img" src="#" alt="好友" /></span>
        <span>好友</span>
        <span>{props.frd}</span>
      </li>
      <li className="basicFunc basicFunc-none">
        <span><img className="basicFunc_img" src="#" alt="余额" /></span>
        <span>余额</span>
        <span>￥{props.money.toFixed(2)}</span>
      </li>
    </ul>
  );
}
