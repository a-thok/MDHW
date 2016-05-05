import React from 'react';
import Navbar from '../../../../components/Navbar';
import getHash from '../../../../mixins/getHash';

export default React.createClass({
  mixins: [getHash],
  componentDidMount: function () {
    console.log(this.props);
  },
  render: function () {
    let url = '/settings/account/edit?type=';
    let profile = this.props.profile;
    return (
      <div onClick={this.handleClick}>
        { /* <Navbar to={`${url}logo`} text="头像" info={<img src={profile.logo} alt={profile.account} />} /> */}
        <Navbar to={`${url}p_sex`} text="性别" info={ profile.p_sex === 'male' ? '男' : '女'} />
        <Navbar to={`${url}p_phone`} text="手机号码" info={profile.p_phone} />
        <Navbar to={`${url}p_email`} text="邮箱地址" info={profile.p_email} />
        <Navbar to={`${url}p_signature`} text="签名" info={profile.p_signature} />
      </div>
    );
  }
});