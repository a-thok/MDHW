import React from 'react';
import UTitle from '../../../../components/UTitle';
import UTextGroup from '../../../../components/UTextGroup';

export default function Preview(props) {
  console.log(props);
  return (
    <div className="preview">
      <UTitle name="基本信息" />
      <div className="preview_content">
        <UTextGroup name="姓 名" text={props.name} />
        <UTextGroup name="性 别" text={props.sex} />
        <UTextGroup name="出生年月" text={props.birth} />
        <UTextGroup name="最高学历" text={props.degree} />
        <UTextGroup name="工作年限" text={props.worktime} />
        <UTextGroup name="所在城市" text={props.city} />
        <UTextGroup name="手机号码" text={props.tel} />
        <UTextGroup name="电子邮箱" text={props.email} />
      </div>
      <UTitle name="期望工作" />
      <div className="preview_content">
        <UTextGroup name="期望职位" text={props.wishpos} />
        <UTextGroup name="职位性质" text={props.posnature} />
        <UTextGroup name="期望城市" text={props.wishcity} />
        <UTextGroup name="期望月薪" text={props.wishsalary} />
      </div>
    </div>
  );
}
