import React from 'react';
import { Link } from 'react-router';

export default function Header(props) {
  return (
    <header className="header header-reverse">
      <div className="header_sect">
        <Link className="header_link" style={{ visibility: props.to === false ? 'hidden' : 'visible' }} to={props.to || '/'}><i className="fa fa-angle-left"></i></Link>
      </div>
      <div className="header_sect header_sect-menu">
        <span className="header_menu" onClick={ props.onToggleMenu} ><i></i><i></i><i></i></span>
        <div className={ props.isShowMenu === false ? 'header_menu_wrap' : 'header_menu_wrap is-show' }>
          <div className="arrow-wrap"><i className="arrow"></i></div>
          <ul className="header_menu_list">
            <li className="header_menu_list_item"><a className="header_link" href="#">梦高速首页</a></li>
            <li className="header_menu_list_item"><a className="header_link" href="#">创客空间</a></li>
            <li className="header_menu_list_item"><a className="header_link" href="#">关于我们</a></li>
            <li className="header_menu_list_item"><a className="header_link" href="#">个人中心</a></li>
          </ul>
        </div>
      </div>
    </header>
  );
}
