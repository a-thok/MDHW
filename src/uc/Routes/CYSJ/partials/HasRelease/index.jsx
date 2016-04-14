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
         tLeft={data.type}
         tRight={data.state}
         m={data.title}
         bLeft={`￥ ${data.money}`}
         bMiddle={`${data.num}参与`}
         bRight={data.model}
       />
    ));
    return (
      <div className="list-plain">
        {content}
      </div>
    );
  }
});
