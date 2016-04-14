import React from 'react';
import FormItemProList from '../../../../components/FormItemProList';

export default React.createClass({
  getInitialState: function () {
    let res = {
      data: [
        { province: '黑龙江', city: '牡丹江', title: '蓝莓卡通设计', money: '200.00', day: '7' },
        { province: '黑龙江', city: '牡丹江', title: '蓝莓卡通设计', money: '200.00', day: '7' },
        { province: '黑龙江', city: '牡丹江', title: '蓝莓卡通设计', money: '200.00', day: '7' },
        { province: '黑龙江', city: '牡丹江', title: '蓝莓卡通设计', money: '200.00', day: '7' },
        { province: '黑龙江', city: '牡丹江', title: '蓝莓卡通设计', money: '200.00', day: '7' }
      ]
    };
    return res;
  },
  render: function () {
    let content = this.state.data.map((data, index) => (
       <FormItemProList
         key={index}
         tLeft={`地区:${data.province}省-${data.city}市`}
         m={data.title}
         bLeft={`报价: ￥ ${data.money}`}
         bMiddle={`工作周期: ${data.day}天`}
         bRight="查看详情"
       />
    ));
    return (
      <div className="List">
        {content}
      </div>
    );
  }
});
