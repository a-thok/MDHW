import React from 'react';
import FormItemInput from '../../components/FormItemInput';
import FormItemSelect from '../../components/FormItemSelect';
import FormItemBtn from '../../components/FormItemBtn';

const ReservationImfor = React.createClass({
  getInitialState: function () {
    let state = {
      name: '深圳大律师',
      person: '电子设备有限公司',
      text: '支持一元，获得免费专业解答'
    };
    return state;
  },
  render: function () {
    return (
      <div className="ReservationImfor">
        <FormItemInput name="姓名" />
        <FormItemInput name="手机" />
        <FormItemSelect name="地址" />
        <p><input type="checkbox" />设为默认地址</p>
        <FormItemBtn value="保存" />
      </div>
    );
  }
});
export default ReservationImfor;
