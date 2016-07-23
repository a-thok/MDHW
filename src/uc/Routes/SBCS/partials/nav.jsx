import React from 'react';
import Navbar from '../../../components/Navbar';

export default function Nav() {
  return (
    <div>
      <Navbar to="/sbcs/sbfollow" text="商标收藏" icon="star" />
      <Navbar to="/sbcs/buyer" text="买家订单列表" icon="list" />
    </div>
  );
}
