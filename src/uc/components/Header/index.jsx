import React from 'react';
import { Link } from 'react-router';

export default function Header(props) {
  console.log(props);
  return (
    <header className="header header-reverse">
      <div className="header_sect">
        <Link style={{ visibility: props.to === false ? 'hidden' : 'visible' }} to={props.to || '/'}><button className="header_btn" type="button"><i className="fa fa-angle-left"></i></button></Link>
      </div>
      <div className="header_sect">
        <span className="header_link">{props.account}</span>
      </div>
    </header>
  );
}
