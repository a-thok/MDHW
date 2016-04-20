import React from 'react';
import { Link } from 'react-router';
import ULink from '../../../../components/ULink';
import getHash from '../../../../mixins/getHash';

export default React.createClass({
  mixins: [getHash],
  render: function () {
    const logo = <img src={this.props.profile.logo} alt="#" style={{ backgroundColor: 'red', borderRadius: '50%' }} />;
    const sex = this.props.profile.p_sex === 'man' ? '男' : '女';
    let email = this.props.profile.p_email || '未填写';
    return (
      <div>
        <div className="ulinkWrap" onClick={this.handleClick}>
          <Link data-type="logo" to="/account/edit?type=logo"><ULink href="#" text="头像" info={logo} /></Link>
          <Link data-type="account" to="/account/edit?type=account"><ULink href="#" text="昵称" info={this.props.profile.account} /></Link>
          <Link data-type="realname" to="/account/edit?type=realname"><ULink href="#" text="真实姓名" info={this.props.profile.p_realname} /></Link>
          <Link data-type="sex" to="/account/edit?type=sex"><ULink href="#" text="性别" info={sex} /></Link>
          <Link data-type="pPhone" to="/account/edit?type=pPhone"><ULink href="#" text="手机号" /></Link>
          <Link data-type="email" to="/account/edit?type=email"><ULink href="#" text="电子邮箱" info={email} /></Link>
          <Link data-type="signature" to="/account/edit?type=signature"><ULink href="#" text="个性签名" /></Link>
          <Link data-type="phone" to="/account/edit?type=phone"><ULink href="#" text="绑定账号" /></Link>
          <Link data-type="address" to="/account/edit?type=address"><ULink href="#" text="收货地址" /></Link>
          <Link data-type="password" to="/account/edit?type=password"><ULink href="#" text="修改密码" /></Link>
        </div>
      </div>
    );
  }
});
