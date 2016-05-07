import React from 'react';
import FormGroup from '../../../components/FormGroup';
import FormButton from '../../../components/FormButton';
import getHash from '../../../mixins/getHash';

export default React.createClass({
  mixins: [getHash],
  componentDidMount: function () {
    this.props.fetchTypes();
  },
  render: function () {
    const form = {
      type: { type: 'select', label: '项目类型', options: this.props.types },
      title: { type: 'input', label: '项目名称', placeholder: '请填写项目名称' },
      info: { type: 'textarea', label: '需求说明', placeholder: '请填写您的你需求，让服务商更好的为您服务' },
      money: { type: 'input', label: '悬赏金额', placeholder: '待商议' },
      phone: { type: 'input', label: '联系方式', placeholder: '请填写您的手机号码' },
      xmzq: { type: 'input', label: '项目周期', placeholder: '请填写项目周期' },
      transaction: { type: 'input', label: '交易模式', placeholder: '请填写您的交易模式' },
      endtime: { type: 'input', label: '截止日期', placeholder: '截止日期' },
      agreement: { type: 'input', label: '是否同意', placeholder: '是/否' }
    };
    const nodes = Object.keys(form).map((item, index) => (
      <FormGroup
        key={index}
        name={item}
        id={item}
        value={this.props.data[item]}
        { ...form[item] }
        onChange={(e) => this.props.onChange(e, item)}
        list = "Publish"
      />
    ));
    return (
      <form className="form" onSubmit={this.props.onSubmit}>
        { nodes }
        <FormButton
          type="submit"
          value="提交"
        />
      </form>
    );
  }
});
