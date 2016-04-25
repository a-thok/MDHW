import React from 'react';
import FormGroup from '../../../components/FormGroup';
import FormButton from '../../../components/FormButton';
import getHash from '../../../mixins/getHash';

export default React.createClass({
  mixins: [getHash],
  render: function () {
    const form = {
      a: { type: 'select', label: '项目类型', id: 'projectname', options: ['请选择', '开发众包', '装修众包'] },
      c: { type: 'input', label: '项目名称', id: 'projectname', placeholder: '请填写项目名称' },
      d: { type: 'textarea', label: '需求说明', id: 'projectname', placeholder: '请填写您的你需求，让服务商更好的为您服务' },
      e: { type: 'input', label: '项目金额', id: 'projectname', placeholder: '待商议' },
      f: { type: 'input', label: '截止日期', id: 'projectname', placeholder: '请选择' },
      g: { type: 'input', label: '联系方式', id: 'projectname', placeholder: '请填写您的手机号码' }
    };
    const nodes = Object.keys(this.props.data).map((item, index) => (
      <FormGroup
        key={index}
        name={item}
        value={this.props.data[item]}
        { ...form[item] }
        onChange={(e, name) => this.props.onChange(e, name)}
      />
    ));
    return (
      <form onSubmit={this.props.onSubmit}>
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
