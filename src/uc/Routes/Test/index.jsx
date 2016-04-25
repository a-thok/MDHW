import React from 'react';
import FormGroup from '../../components/FormGroup';
import FormButton from '../../components/FormButton';

export default React.createClass({
  getInitialState: function () {
    return {
      a: 'b',
      b: 'adf',
      c: 'adfadfs',
      d: 'afda',
      e: 'adf',
      f: 'adsf',
      g: 'afdas'
    };
  },
  onChange: function (e, name) {
    this.setState(Object.assign({}, this.state, {
      [name]: e.target.value
    }));
  },
  onSubmit: function (e) {
    e.preventDefault();
  },
  render: function () {
    const form = {
      a: { type: 'select', label: '项目类型', id: 'projectname', options: ['a', 'b', 'c'] },
      b: { type: 'input', label: '项目类型', id: 'projectname', placeholder: '请填写项目名称' },
      c: { type: 'input', label: '项目名称', id: 'projectname', placeholder: '请填写项目名称' },
      d: { type: 'textarea', label: '需求说明', id: 'projectname', placeholder: '请填写项目名称' },
      e: { type: 'input', label: '项目金额', id: 'projectname', placeholder: '请填写项目名称' },
      f: { type: 'input', label: '截止日期', id: 'projectname', placeholder: '请填写项目名称' },
      g: { type: 'input', label: '联系方式', id: 'projectname', placeholder: '请填写您的手机号码' }
    };
    const nodes = Object.keys(this.state).map((item, index) => (
      <FormGroup
        key={index}
        name={item}
        value={this.state[item]}
        { ...form[item] }
        onChange={(e, name) => this.onChange(e, name)}
      />
    ));
    return (
      <form onSubmit={this.onSubmit}>
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
