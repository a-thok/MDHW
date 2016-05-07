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
    let content = this.props.data.map((item, index) => (
       <ListItemPlain
         key={index}
         info={item.name}
         title={item.title}
         elems={[
           <span>项目金额：￥{item.totalfin}</span>,
           <span>截止时间：{item.endtime}</span>
         ]}
         url={item.url}
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
