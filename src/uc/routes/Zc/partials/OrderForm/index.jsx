import React from 'react';
import TextGroup from '../../../../components/TextGroup';
import NumGroup from './NumGroup';
import Counter from '../../../../components/Counter';


export default React.createClass({
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
      <div className="order">
        <section className="order_sect">
          <TextGroup name="项目名称" text="" />
          <TextGroup name="发起人" text="" />
          <TextGroup name="回报内容" text="" />
        </section>
        <section className="order_sect">
          <TextGroup name="收货地址" text="" />
        </section>
        <section className="order_sect">
          <div className="orderInputGroup">
            <label className="orderLabel">备注信息：</label>
            <input
              className="orderInput"
              type="text"
            />
          </div>
        </section>
        <section className="order_sect">
          <NumGroup name="回报数量" text={<Counter />} />
          <NumGroup name="支持单价" />
          <NumGroup name="配送运费" />
          <NumGroup name="支持金额" />
        </section>
      </div>
    );
  }
});
