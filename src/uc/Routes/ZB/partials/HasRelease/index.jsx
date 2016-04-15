import React from 'react';
import ListItemPlain from '../../../../components/ListItemPlain';

export default React.createClass({
  getInitialState: function () {
    let res = {
      data: [
        { type: '开发众包', title: '软件开发 MAX插件开发', money: '200.00', endtime: '2016-06-06' },
        { type: '开发众包', title: '软件开发 MAX插件开发', money: '200.00', endtime: '2016-06-06' },
        { type: '开发众包', title: '软件开发 MAX插件开发', money: '200.00', endtime: '2016-06-06' },
        { type: '开发众包', title: '软件开发 MAX插件开发', money: '200.00', endtime: '2016-06-06' }
      ]
    };
    return res;
  },
  render: function () {
    let content = this.state.data.map((data, index) => (
       <ListItemPlain
         key={index}
         info={data.type}
         title={data.title}
         elems={[
           <span className="fontColor">项目金额: ￥{data.money}</span>,
           <span>{data.endtime}</span>
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
