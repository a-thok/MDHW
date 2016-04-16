import React from 'react';
import UTitle from '../../../../components/UTitle';
import UTextGroup from '../../../../components/UTextGroup';
import getHash from '../../../../mixins/getHash';

export default React.createClass({
  mixins: [getHash],
  componentDidMount: function () {
    this.props.onResumePreview();
  },
  render: function () {
    console.log(this.props);
    return (
      <div className="preview">
        <UTitle name="基本信息" />
        <div className="preview_content">
          <UTextGroup name="姓 名" text={this.props.name} />
          <UTextGroup name="性 别" text={this.props.gender} />
          <UTextGroup name="出生年月" text={`${this.props.birthYear} - ${this.props.birthDay}`} />
          <UTextGroup name="最高学历" text={this.props.degree} />
          <UTextGroup name="工作年限" text={this.props.experience} />
          <UTextGroup name="所在城市" text={this.props.city} />
          <UTextGroup name="手机号码" text={this.props.tel} />
          <UTextGroup name="电子邮箱" text={this.props.email} />
        </div>
        <UTitle name="期望工作" />
        <div className="preview_content">
          {/* 下面的字段名是错的 */}
          <UTextGroup name="期望职位" text={this.props.wishpos} />
          <UTextGroup name="职位性质" text={this.props.posnature} />
          <UTextGroup name="期望城市" text={this.props.wishcity} />
          <UTextGroup name="期望月薪" text={this.props.wishsalary} />
        </div>
      </div>
    );
  }
});
