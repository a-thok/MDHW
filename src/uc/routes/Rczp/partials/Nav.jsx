import React from 'react';
import Navbar from '../../../components/Navbar';

export default function Nav() {
  return (
    <div>
      <Navbar to="/rczp/preview" text="简历预览" icon="eye" />
      <Navbar to="/rczp/resume" text="已投简历" icon="inbox" />
      <Navbar to="/rczp/post" text="职位收藏" icon="star-o" />
      <Navbar to="/rczp/comment" text="我的评价" icon="comments-o" />
    </div>
  );
}
