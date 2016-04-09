import React from 'react';

export default function Header() {
  return (
    <header className="header header-reverse">
      <div className="header_sect">
        <button className="header_btn" type="button"><i className="fa fa-angle-left"></i></button>
      </div>
      <div className="header_sect">
        <a href="#" className="header_link">登录</a>
      </div>
    </header>
  );
}
