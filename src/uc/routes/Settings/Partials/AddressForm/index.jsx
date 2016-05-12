import React, { Component } from 'react';
import FormGroupSimple from '../../../../components/FormGroupSimple';
import FormAddress from '../../../../components/FormAddress';
import FormCheck from '../../../../components/FormCheck';
import FormButton from '../../../../components/FormButton';

export default class AddressForm extends Component {
  componentDidMount() {
    const hash = window.location.hash;
    if (hash.indexOf('/address/edit') !== -1) {
      let id;
      hash.replace(/id=(\d+)/, (str, $1) => { id = $1; });
      this.props.fetchAddressDetail(id);
    } else {
      this.props.onReset();
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const hash = window.location.hash;
    if (hash.indexOf('/address/edit') !== -1) {
      let id;
      hash.replace(/id=(\d+)/, (str, $1) => { id = $1; });
      this.props.onSubmit(id);
    } else {
      this.props.onSubmit();
    }
  }

  render() {
    return (
      <form className="addressForm" onSubmit={(e) => this.handleSubmit(e)}>
        <FormGroupSimple
          label="姓名"
          name="name"
          placeholder="请输入姓名"
          value={this.props.data.name}
          onChange={this.props.onAddressChange}
        />
        <FormGroupSimple
          label="手机"
          name="mobile"
          placeholder="请输入收件人手机号码"
          value={this.props.data.mobile}
          onChange={this.props.onAddressChange}
        />
        <FormGroupSimple
          label="邮政编码"
          name="code"
          placeholder="请输入邮政编码，若不确定请填写6个0"
          value={this.props.data.code}
          onChange={this.props.onAddressChange}
        />
        <FormGroupSimple
          label="地址"
          content={
            <FormAddress
              name="address"
              selectName="area"
              fetchAreaData={this.props.fetchAreaData}
              areaData={this.props.areaData}
              onAreaChange={this.props.onAreaChange}
              area={this.props.data.area}
              value={this.props.data.address}
              onChange={this.props.onAddressChange}
            />
          }
        />
        <FormGroupSimple
          content={
            <FormCheck
              text="设为默认地址"
              name="isDefault"
              value={this.props.data.isDefault}
              onChange={this.props.onAddressChange}
            />
          }
        />
        <FormButton
          type="submit"
          value="保存"
        />
      </form>
    );
  }
}
