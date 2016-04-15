import React from 'react';
import ListItemPlain from '../../../../components/ListItemPlain';

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
       <ListItemPlain
         key={index}
         info={`地区:${data.province}省-${data.city}市`}
         title={data.title}
         elems={[
           <span className="fontColor">报价: ￥{data.money}</span>,
           <span>工作周期: {data.day}天</span>,
           <a className="list-link" href="#">查看详情</a>
         ]}
       />
    ));
    return (
      <ul className="list list-plain">
        {content}
      </ul>
    );
  }
});
