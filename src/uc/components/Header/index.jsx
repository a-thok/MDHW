import React from 'react';
import { Link } from 'react-router';

export default function Header(props) {
  console.log(props);
  return (
    <header className="header header-reverse">
      <div className="header_sect">
        <Link className="header_link" style={{ visibility: props.to === false ? 'hidden' : 'visible' }} to={props.to || '/'}><i className="fa fa-angle-left"></i></Link>
      </div>
      <div className="header_sect">
        <a className="header_link" href={`${MAIN_HOST}/m/main/Logout`}>退出</a>
      </div>
    </header>
  );
}
