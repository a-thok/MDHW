import React from 'react';
import Navbar from '../../../components/Navbar';

export default function Nav() {
  return (
    <div>
      <Navbar to="/srdz/follow" text="已关注项目" icon="star" />
      <Navbar to="/srdz/seller" text="卖家订单列表" icon="list" />
      <Navbar to="/srdz/buyer" text="买家订单列表" icon="list" />
    </div>
  );
}
