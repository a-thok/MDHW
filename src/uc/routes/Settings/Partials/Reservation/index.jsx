import React from 'react';
import TextGroup from '../../../../components/TextGroup';
import FormItemInput from '../../../../components/FormItemInput';
import FormItemTextRight from '../../../../components/FormItemTextRight';
import Counter from '../../../../components/Counter';


const Reservation = React.createClass({
  getInitialState: function () {
    let state = {
      name: '深圳大律师',
      person: '电子设备有限公司',
      text: '支持一元，获得免费专业解答',
      pName: '小小',
      pAddr: '福建省 泉州市 石狮市 鸿山镇 国家高新区创新创业中心',
      remark: '',
      repayNum: 0,
      danjia: '1.00',
      yunfei: '免运费',
      price: '1.00',
      fx: '风险提示内容'
    };
    return state;
  },
  onAddNumber: function () {
    let newState = Object.assign({}, this.state);
    newState.repayNum += 1;
    this.setState(newState);
  },
  onReduceNumber: function () {
    let newState = Object.assign({}, this.state);
    if (newState.repayNum < 1) return;
    newState.repayNum -= 1;
    this.setState(newState);
  },
  render: function () {
    return (
      <div className="reservation">
        <div className="reservation_box reservation_box-width">
          <TextGroup name="项目名称" text={this.state.name} />
          <TextGroup name="发起人" text={this.state.person} />
          <TextGroup name="回报内容" text={this.state.text} />
        </div>
        <div className="reservation_box reservation_box-width">
          <TextGroup name="收获地址" text={this.state.pName} />
          <div className="reservation_box_img"><TextGroup name="图片" text={this.state.pAddr} /></div>
        </div>
        <div className="reservation_box reservation_box-width">
          <FormItemInput name="备注信息" text={this.state.remark} />
        </div>
        <div className="Reservation_box">
          <Counter
            name="回报数量"
            text={this.state.repayNum}
            onAddNumber={this.onAddNumber}
            onReduceNumber={this.onReduceNumber}
          />
          <FormItemTextRight name="支持单价" text={this.state.danjia} font="￥" />
          <FormItemTextRight name="配送运费" text={this.state.yunfei} />
          <div className="reservation_box_tColor"><FormItemTextRight name="支持金额" text={this.state.price} font="￥" color="red" /></div>
        </div>
        <div className="reservation_box">
          <p><i className="fa fa-exclamation-circle"></i>风险提示</p>
          <p className="reservation_box_text">{this.state.fx}</p>
        </div>
      </div>
    );
  }
});

export default Reservation;
