import React from 'react';
import FormItemInput from '../../components/FormItemInput';
import FormItemSelect from '../../components/FormItemSelect';
import FormButton from '../../components/FormButton';

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
       <span className="ReservationImfor_width"><FormItemInput name="姓名" /></span>
       <span className="ReservationImfor_width"><FormItemInput name="手机" /></span>
        <FormItemSelect name="地址" />
        <p><input type="checkbox" />设为默认地址</p>
        <div className="ReservationImfor_btn"><FormButton value="保存" /></div>
      </div>
    );
  }
});
export default ReservationImfor;
