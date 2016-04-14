import React from 'react';
import FormItemList from '../../../../components/FormItemList';

export default React.createClass({
  getInitialState: function () {
    let res = {
      data: [
        { img: '图片1', position: '工程师1', city: '福建', company: '创企科技', salary: '2000-5000', time: '2016-04-06' },
        { img: '图片2', position: '工程师2', city: '福建', company: '创企科技', salary: '2000-5000', time: '2016-04-06' },
        { img: '图片3', position: '工程师3', city: '福建', company: '创企科技', salary: '2000-5000', time: '2016-04-06' },
        { img: '图片4', position: '工程师4', city: '福建', company: '创企科技', salary: '2000-5000', time: '2016-04-06' }
      ]
    };
    return res;
  },
  render: function () {
    let contentList = this.state.data.map((data, index) => (
      <FormItemList
        key={index}
        {...data}
        mMiddle={`月薪:${data.salary}`}
        mBottom={data.company}
        rTop="投递成功"
        rBottom={data.time}
        city={`[${data.city}]`}
      />
    ));
    return (
      <div className="List">
        {contentList}
      </div>
    );
  }
});
