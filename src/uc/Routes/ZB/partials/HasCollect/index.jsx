import React from 'react';
import ListItemPlain from '../../../../components/ListItemPlain';

export default React.createClass({
  getInitialState: function () {
    let res = {
      data: [
        { seltime: '20196-06-05', title: '蓝莓卡通设计', endtime: '20196-06-05' },
        { seltime: '20196-06-05', title: '蓝莓卡通设计', endtime: '20196-06-05' },
        { seltime: '20196-06-05', title: '蓝莓卡通设计', endtime: '20196-06-05' },
        { seltime: '20196-06-05', title: '蓝莓卡通设计', endtime: '20196-06-05' }
      ]
    };
    return res;
  },
  render: function () {
    let content = this.state.data.map((data, index) => (
      <ListItemPlain
        key={index}
        info={`收藏时间:${data.seltime}`}
        title={data.title}
        elems={[
          <span>结束时间: {data.endtime}</span>,
          <a className="list-link" href="#">取消收藏</a>
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
