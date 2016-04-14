import React from 'react';
import FormItemList from '../../../../components/FormItemList';

export default React.createClass({
  getInitialState: function () {
    let res = {
      data: [
        { type: '科技', title: '蓝牙立体耳机世界上最小的立体无线耳机', item: '50000000', progress: '72%', state: '众筹中' },
        { type: '科技', title: '蓝牙立体耳机世界上最小的立体无线耳机', item: '50000000', progress: '72%', state: '众筹中' },
        { type: '科技', title: '蓝牙立体耳机世界上最小的立体无线耳机', item: '50000000', progress: '72%', state: '众筹中' },
        { type: '科技', title: '蓝牙立体耳机世界上最小的立体无线耳机', item: '50000000', progress: '72%', state: '众筹中' },
        { type: '科技', title: '蓝牙立体耳机世界上最小的立体无线耳机', item: '50000000', progress: '72%', state: '众筹中' },
        { type: '科技', title: '蓝牙立体耳机世界上最小的立体无线耳机', item: '50000000', progress: '72%', state: '众筹中' }
      ]
    };
    return res;
  },
  render: function () {
    let content = this.state.data.map((data, index) => (
       <FormItemList
         key={index}
         tLeft={data.type}
         mMiddle={`目标:${data.item}`}
         bLeft={`项目金额: ￥ ${data.money}`}
         bRight={data.endtime}
       />
    ));
    return (
      <div className="List">
        {content}
      </div>
    );
  }
});
