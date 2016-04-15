import React from 'react';
import ListItemPlain from '../../../../components/ListItemPlain';

export default React.createClass({
  getInitialState: function () {
    let res = {
      data: [
        { type: '卡通形象设计', title: '苒妹卡通形象设计', state: '待托管', money: '200.00', num: '8', model: '比稿' },
        { type: '卡通形象设计', title: '苒妹卡通形象设计', state: '待托管', money: '200.00', num: '8', model: '比稿' },
        { type: '卡通形象设计', title: '苒妹卡通形象设计', state: '待托管', money: '200.00', num: '8', model: '比稿' },
        { type: '卡通形象设计', title: '苒妹卡通形象设计', state: '待托管', money: '200.00', num: '8', model: '比稿' }
      ]
    };
    return res;
  },
  render: function () {
    let content = this.state.data.map((data, index) => (
       <ListItemPlain
         key={index}
         info={data.type}
         small={data.state}
         title={data.title}
         elems={[
           <span className="fontColor">￥ {data.money}</span>,
           <span>{data.num}参与</span>,
           <span>{data.mode}</span>
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
