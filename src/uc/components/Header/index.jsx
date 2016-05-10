import React from 'react';
// import { Link } from 'react-router';

export default function Header(props) {
  function handleClick(e) {
    e.preventDefault();
    history.back();
  }
  return (
    <header className="header header-reverse">
      <div className="header_sect">
        <a className="header_link" href="#" onClick={handleClick}><i className="fa fa-angle-left"></i></a>
      </div>
      <div className="header_sect header_sect-menu">
        <span className="header_menu" onClick={ props.onToggleMenu} ><i></i><i></i><i></i></span>
        <div className={ props.isShowMenu ? 'header_menu_wrap is-show' : 'header_menu_wrap' }>
          <div className="arrow-wrap"><i className="arrow"></i></div>
          <ul className="header_menu_list">
            <li className="header_menu_list_item"><a className="header_link" href={`http://${MAIN_HOST}/m`}>梦高速首页</a></li>
            <li className="header_menu_list_item"><a className="header_link" href={`http://${MAIN_HOST}/m/person/index/${props.id}`}>个人彩页</a></li>
            <li className="header_menu_list_item"><a className="header_link" href="/main/Logout">退出</a></li>
          </ul>
        </div>
      </div>
    </header>
  );
}
