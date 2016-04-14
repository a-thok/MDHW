import React from 'react';
import { Link } from 'react-router';

export default function Header(props) {
  return (
    <header className="header header-reverse">
      <div className="header_sect">
        <Link to={props.to}><button className="header_btn" type="button"><i className="fa fa-angle-left"></i></button></Link>
      </div>
      <div className="header_sect">
        <a href="#" className="header_link">登录</a>
      </div>
    </header>
  );
}
