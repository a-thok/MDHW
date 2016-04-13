import React from 'react';
import FormItemTitle from '../../../../components/FormItemTitle';
import FormItemText from '../../../../components/FormItemText';

export default React.createClass({
  getInitialState: function () {
    let state = {
      name: '小李',
      sex: '男',
      birth: '2016-04-08',
      degree: '博士',
      worktime: '10年',
      city: '火星',
      tel: '121201210000',
      email: 'xiaoli@qq.com',
      wishpos: '风险顾问',
      posnature: '全职',
      wishcity: '意大利',
      wishsalary: '230000以上'
    };
    return state;
  },
  render: function () {
    return (
      <div>
        <FormItemTitle name="基本信息" />
        <div>
          <FormItemText name="姓   名" text={this.state.name} />
          <FormItemText name="性   别" text={this.state.sex} />
          <FormItemText name="出生年月" text={this.state.birth} />
          <FormItemText name="最高学历" text={this.state.degree} />
          <FormItemText name="工作年限" text={this.state.worktime} />
          <FormItemText name="所在城市" text={this.state.city} />
          <FormItemText name="手机号码" text={this.state.tel} />
          <FormItemText name="电子邮箱" text={this.state.email} />
        </div>
        <FormItemTitle name="期望工作" />
        <div>
          <FormItemText name="期望职位" text={this.state.wishpos} />
          <FormItemText name="职位性质" text={this.state.posnature} />
          <FormItemText name="期望城市" text={this.state.wishcity} />
          <FormItemText name="期望月薪" text={this.state.wishsalary} />
        </div>
      </div>
    );
  }
});
