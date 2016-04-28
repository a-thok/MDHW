import React from 'react';
import ListItemPlain from '../../../components/ListItemPlain';
import Loading from '../../../components/Loading';
import getHash from '../../../mixins/getHash';
import scroll from '../../../mixins/scroll';
import removeWindowEvent from '../../../mixins/removeWindowEvent';

export default React.createClass({
  mixins: [getHash, removeWindowEvent],
  componentDidMount: function () {
    this.props.fetchPublished();
    window.addEventListener('scroll', this.handleScroll);
  },
  handleScroll: function () {
    scroll(this.props.fetchPublished);
  },
  render: function () {
    let content = this.props.data.map((data, index) => (
       <ListItemPlain
         key={index}
         info={data.name}
         title={data.title}
         elems={[
           <span>项目金额：￥{data.totalfin}</span>,
           <span>截止时间：{data.endtime}</span>
         ]}
       />
    ));
    return (
      <div>
        <ul className="list list-plain">
          {content}
        </ul>
        <Loading
          finished={this.props.finished}
          dataLen={this.props.data.length}
        />
      </div>
    );
  }
});
