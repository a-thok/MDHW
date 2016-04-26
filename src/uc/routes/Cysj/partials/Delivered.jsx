import React from 'react';
import ListItemPlain from '../../../components/ListItemPlain';
import Loading from '../../../components/Loading';
import getHash from '../../../mixins/getHash';
import scroll from '../../../mixins/scroll';
import removeWindowEvent from '../../../mixins/removeWindowEvent';

export default React.createClass({
  mixins: [getHash, removeWindowEvent],
  componentDidMount: function () {
    this.props.fetchDelivered();
    window.addEventListener('scroll', this.handleScroll);
  },
  handleScroll: function () {
    scroll(this.props.fetchDelivered);
  },
  render: function () {
    let content = this.props.data.map((item, index) => (
      <ListItemPlain
        key={index}
        info={`地区: ${item.address}`}
        title={item.title}
        elems={[
          <span className="fontColor">报价: ￥{item.quote}</span>,
          <span>工作周期: {item.worktime}天</span>,
          <a className="list-link" href="#">查看详情</a>
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
