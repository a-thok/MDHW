import React from 'react';
import UTextGroup from '../../../../../components/UTextGroup';
import FormInput from '../../../../../components/FormInput';

export default React.createClass({
  render: function () {
    const li = <li style={{ margin: '0 2em', padding: '10px 0', borderTop: '1px solid #ccc' }}><input type="text" placeholder="请再次输入新密码" style={{ border: '0' }} /></li>;
    const btn = <button type="button">发送验证码</button>;
    let num = this.props.res.temp.phone;
    const phonenum = num ? `${num.slice(0, 3)}*****${num.slice(-3)}` : null;
    return (
      <form onSubmit={this.props.onSubmit}>
        <UTextGroup name="绑定手机" text={phonenum} />
        <FormInput
          placeholder="请填写验证码"
          btn={btn}
        />
        <FormInput placeholder="请输入密码" li={li} />
      </form>
    );
  }
});
