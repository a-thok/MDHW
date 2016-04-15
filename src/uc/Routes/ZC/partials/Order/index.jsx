import React from 'react';
import ListItem from '../../../../components/ListItem';
import Loading from '../../../../components/Loading';
import getHash from '../../../../mixins/getHash';
import removeWindowEvent from '../../../../mixins/removeWindowEvent';

export default React.createClass({
  mixins: [getHash, removeWindowEvent],
  componentDidMount: function () {
    this.props.onFilter(0);
    this.props.onOrderList();
    window.addEventListener('scroll', this.handleScroll);
  },
  handleScroll: function () {
    const body = document.body;
    const remain = body.scrollHeight - body.scrollTop - window.screen.height;
    if (remain < 50) this.props.onOrderList();
  },
  handleClick: function (type) {
    this.props.onFilter(type);
  },
  render: function () {
    let content = this.props.data.map((item, index) => (
       <ListItem
         {...item}
         key={index}
         multiple={{ '进度': item.progress, '状态': item.state }}
         title={item.title}
         small={item.type}
         emp={['目标', item.item]}
         tep="down"
       />
    ));
    return (
      <div>
        <ul className="listTabs">
          <li
            className={ `listTab${this.props.type === 0 ? ' is-active' : ''}` }
            onClick={() => this.handleClick(0)}
          >待付款</li>
          <li
            className={ `listTab${this.props.type === 1 ? ' is-active' : ''}` }
            onClick={() => this.handleClick(1)}
          >已付款</li>
        </ul>
        <ul className="list">
          {content}
        </ul>
        <Loading finished={this.props.finished} />
      </div>
    );
  }
});
