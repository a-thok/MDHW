import React from 'react';
import FormGroup from '../../../components/FormGroup';
import FormButton from '../../../components/FormButton';

export default function Bidding(props) {
  const form = {
    contact: { type: 'input', label: '您的联系方式？', placeholder: '联系电话或邮箱' },
    content: { type: 'textarea', label: '您的优势？', placeholder: '描述你的优势，上传服务过的案例或花时间根据要求做个初案' }
  };
  const nodes = Object.keys(form).map((item, index) => (
    <FormGroup
      key={index}
      name={item}
      id={item}
      value={props.data[item]}
      {...form[item]}
      onChange={(e) => props.onChange(e, item, 'Bidding')}
    />
  ));
  return (
    <form className="toubiao" onSubmit={props.onTbSubmit}>
      <p className="toubiao_msg">按照发包方的要求，请先回答如下问题，以展示您的实力，将更有机会赢得这个订单</p>
      {nodes}
      <FormButton type="submit" value="投标" />
    </form>
  );
}
