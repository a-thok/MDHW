import React from 'react';
import Navbar from '../../../../components/Navbar';
import getHash from '../../../../mixins/getHash';

export default React.createClass({
  mixins: [getHash],
  render: function () {
    const logo = <img src={this.props.profile.logo} alt="#" style={{ backgroundColor: 'red', borderRadius: '50%' }} />;
    const sex = this.props.profile.p_sex === 'man' ? '男' : '女';
    let email = this.props.profile.p_email || '未填写';
    return (
      <div onClick={this.handleClick}>
        <Navbar data-type="logo" to="/account/edit?type=logo" text="头像" info={logo} />
        <Navbar data-type="account" to="/account/edit?type=account" text="昵称" info={this.props.profile.account} />
        <Navbar data-type="realname" to="/account/edit?type=realname" text="真实姓名" info={this.props.profile.p_realname} />
        <Navbar data-type="sex" to="/account/edit?type=sex" text="性别" info={sex} />
        <Navbar data-type="pPhone" to="/account/edit?type=pPhone" text="手机号" />
        <Navbar data-type="email" to="/account/edit?type=email" info={email} />
        <Navbar data-type="signature" to="/account/edit?type=signature" text="个性签名" />
        <Navbar data-type="phone" to="/account/edit?type=phone" text="绑定账号" />
        <Navbar data-type="address" to="/account/edit?type=address" text="收货地址" />
        <Navbar data-type="password" to="/account/edit?type=password" text="修改密码" />
      </div>
    );
  }
});
