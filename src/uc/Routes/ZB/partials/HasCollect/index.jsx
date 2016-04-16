import React from 'react';
import ListItemPlain from '../../../../components/ListItemPlain';
import Loading from '../../../../components/Loading';
import getHash from '../../../../mixins/getHash';
import removeWindowEvent from '../../../../mixins/removeWindowEvent';

export default React.createClass({
  mixins: [getHash, removeWindowEvent],
  componentDidMount: function () {
    this.props.onHasCollectList();
    window.addEventListener('scroll', this.handleScroll);
  },
  handleScroll: function () {
    const body = document.body;
    const remain = body.scrollHeight - body.scrollTop - window.screen.height;
    if (remain < 50) this.props.onHasCollectList();
  },
  render: function () {
    let content = this.props.data.map((item, index) => (
      <ListItemPlain
        key={index}
        info={`收藏时间: ${item.time}`}
        title={item.title}
        elems={[
          <span>结束时间: {item.endtime}</span>,
          <a className="list-link" href="#">取消收藏</a>
        ]}
      />
    ));
    return (
      <div>
        <ul className="list list-plain">
          {content}
        </ul>
        <Loading finished={this.props.finished} />
      </div>
    );
  }
});
