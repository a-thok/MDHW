import React from 'react';
import Title from '../../../components/Title';
import TextGroup from '../../../components/TextGroup';
import getHash from '../../../mixins/getHash';

export default React.createClass({
  mixins: [getHash],
  componentDidMount: function () {
    this.props.fetchPreview();
  },
  render: function () {
    return (
      <div className="preview">
        <Title name="基本信息" />
        <div className="TextGroupWrapper">
          <TextGroup name="姓 名" text={this.props.name} />
          <TextGroup name="性 别" text={this.props.gender} />
          <TextGroup name="出生年月" text={`${this.props.birthYear} - ${this.props.birthDay}`} />
          <TextGroup name="最高学历" text={this.props.degree} />
          <TextGroup name="工作年限" text={this.props.experience} />
          <TextGroup name="所在城市" text={this.props.city} />
          <TextGroup name="手机号码" text={this.props.tel} />
          <TextGroup name="电子邮箱" text={this.props.email} />
        </div>
        <Title name="期望工作" />
        <div className="TextGroupWrapper">
          {/* 下面的字段名是错的 */}
          <TextGroup name="期望职位" text={this.props.wishpos} />
          <TextGroup name="职位性质" text={this.props.posnature} />
          <TextGroup name="期望城市" text={this.props.wishcity} />
          <TextGroup name="期望月薪" text={this.props.wishsalary} />
        </div>
      </div>
    );
  }
});
