import React from 'react';
import FormGroup from '../../../components/FormGroup';
import FormButton from '../../../components/FormButton';
import getHash from '../../../mixins/getHash';

export default React.createClass({
  mixins: [getHash],
  // componentDidMount: function () {
  //   this.props.fetchTypes();
  // },
  render: function () {
    const form = {
      typeid: { type: 'select', label: '项目类型', options: [
        { text: '开发众包', value: 1 },
        { text: '装修众包', value: 2 },
        { text: '营销众包', value: 3 },
        { text: '电商众包', value: 4 },
        { text: '其他', value: 5 }] },
      title: { type: 'input', label: '项目名称', placeholder: '请填写项目名称' },
      intro: { type: 'textarea', label: '需求说明', placeholder: '请填写您的你需求，让服务商更好的为您服务' },
      totalfin: { type: 'input', label: '项目金额', placeholder: '待商议' },
      endtime: { type: 'input', label: '截止日期', placeholder: '截止日期' },
      phone: { type: 'input', label: '联系方式', placeholder: '请填写您的手机号码' }
    };
    const nodes = Object.keys(form).map((item, index) => (
      <FormGroup
        key={index}
        name={item}
        id={item}
        value={this.props.data[item]}
        { ...form[item] }
        onChange={(e) => this.props.onChange(e, item)}
      />
    ));
    return (
      <form className="form" onSubmit={this.props.onSubmit}>
        { nodes }
        <FormButton
          style={{
            margin: '20px auto',
            background: '#cc1414'
          }}
          type="submit"
          value="提交"
        />
      </form>
    );
  }
});
