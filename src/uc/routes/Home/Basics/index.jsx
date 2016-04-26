import React from 'react';
import Basic from './Basic';

export default function Basics(props) {
  const basics = [
    { to: '/', icon: 'commenting-o', text: '消息', num: props.message },
    { to: '/', icon: 'user', text: '好友', num: null },
    { to: '/', icon: 'rmb', text: '余额', num: (+props.balance).toFixed(2) }
  ];
  const basicNodes = basics.map((basic) => (
    <Basic
      to={basic.to}
      icon={basic.icon}
      text={basic.text}
      num={basic.num}
    />
  ));
  return (
    <ul className="basics" >
      {basicNodes}
    </ul>
  );
}
