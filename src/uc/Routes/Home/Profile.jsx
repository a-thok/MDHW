import React from 'react';
import { Link } from 'react-router';

export default function Profile(props) {
  const isMale = props.p_sex === 'male';
  return (
    <div className="profile">
      <figure className="profile_figure">
        <img src={props.logo ? `http://${UPLOAD_HOST}/img/${props.logo}` : `http://${CDN_HOST}/images/default2.png`} alt={props.account} />
        <figcaption className="profile_title">
          <span className="profile_name">{props.account}</span>
          {
            isMale ?
              <i className="fa fa-mars" style={{ color: 'skyblue' }} /> :
              <i className="fa fa-venus" style={{ color: 'pink' }} />
          }
        </figcaption>
      </figure>
      <p className="profile_para profile_para-center">
        <span className="profile_tel">{`绑定手机：${props.phone || '未绑定'}`}</span>
        <span>{`绑定邮箱：${props.email || '未绑定'}`}</span>
      </p>
      <p className="profile_para profile_para-center">
        <span className="profile_tel">{`个人手机：${props.p_phone || '未绑定'}`}</span>
        <span>{`个人邮箱：${props.p_email || '未绑定'}`}</span>
      </p>
      <p className="profile_para">{props.p_signature}</p>
      <Link className="profile_link" to="/settings/account">
        <i className="fa fa-edit"></i>
      </Link>
    </div>
  );
}
