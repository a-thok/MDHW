import React from 'react';
import ListItemPlain from '../../../components/ListItemPlain';
import Loading from '../../../components/Loading';
import getHash from '../../../mixins/getHash';
import scroll from '../../../mixins/scroll';
import removeWindowEvent from '../../../mixins/removeWindowEvent';

export default React.createClass({
  mixins: [getHash, removeWindowEvent],
  componentDidMount: function () {
    this.props.fetchCollection();
    window.addEventListener('scroll', this.handleScroll);
  },
  handleScroll: function () {
    scroll(this.props.fetchCollection);
  },
  handleClick: function (e, id, index) {
    e.preventDefault();
    this.props.delCollection(id, index);
  },
  render: function () {
    let content = this.props.data.map((item, index) => (
      <ListItemPlain
        key={index}
        info={`收藏时间: ${item.time}`}
        title={item.title}
        elems={[
          <span>结束时间: {item.endtime}</span>,
          <a className="list_operate" href="#" onClick={(e) => this.handleClick(e, item.id, index)}>取消收藏</a>
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
