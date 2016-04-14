import React from 'react';
import FormItemProList from '../../../../components/FormItemProList';

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
       <FormItemProList
         key={index}
         tLeft={data.type}
         m={data.title}
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
