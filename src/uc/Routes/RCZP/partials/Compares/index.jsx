import React from 'react';
import FormItemCompares from '../../../../components/FormItemCompares';

export default React.createClass({
  getInitialState: function () {
    let res = {
      data: [
        { img: '图片1', position: '工程师1', content: '面试还好dasdasddasdasdasdasdasdasdas', company: '创企科技', time: '2016-04-06' },
        { img: '图片2', position: '工程师2', content: '面试还好ddadasdasdasdasdasdad', company: '创企科技', time: '2016-04-06' },
        { img: '图片3', position: '工程师3', content: '面试还好', company: '创企科技', time: '2016-04-06' },
        { img: '图片4', position: '工程师4', content: '面试还好', company: '创企科技', time: '2016-04-06' }
      ]
    };
    res.data.forEach((item) => { item.complete = false; });
    return res;
  },
  put: function (index) {
    let arr = this.state.data.slice(0, index);
    arr.push(Object.assign({}, this.state.data[index], { complete: true }));
    this.setState({
      data: arr.concat(this.state.data.slice(index + 1))
    });
  },
  render: function () {
    let commentList = this.state.data.map((data, index) => (
       <FormItemCompares
         key={index}
         index={index}
         img={data.img}
         position={data.position}
         content={data.content}
         company={data.company}
         time={data.time}
         complete={data.complete}
         completeText={data.completeText}
         put={this.put}
       />
      ));
    return (
      <div className="List">
        { commentList }
      </div>
    );
  }
});
