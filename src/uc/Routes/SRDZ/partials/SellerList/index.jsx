import React from 'react';
import ListItem from '../../../../components/ListItem';
import ListItemDetail from '../../../../components/ListItemDetail';
import Loading from '../../../../components/Loading';
import getHash from '../../../../mixins/getHash';
import removeWindowEvent from '../../../../mixins/removeWindowEvent';

export default React.createClass({
  mixins: [getHash, removeWindowEvent],
  componentDidMount: function () {
    this.props.onFilter(0);
    this.props.onSellerListList();
    window.addEventListener('scroll', this.handleScroll);
  },
  handleClick: function (type) {
    if (type === this.props.type) return;
    this.props.onFilter(type);
  },
  handleScroll: function () {
    const body = document.body;
    const remain = body.scrollHeight - body.scrollTop - window.screen.height;
    if (remain < 50) this.props.onSellerListList();
  },
  render: function () {
    let content = this.props.data.map((item, index) => (
      <ListItem
        key={index}
        {...item}
        index={index}
        multiple={{ '状态': item.state }}
        emp={['买家名称', item.buyerName]}
        small={item.type}
        tep="down"
        extra={<ListItemDetail />}
        onPush={this.props.onPush}
      />
    ));
    return (
      <div>
        <ul className="listTabs">
          <li
            className={ `listTab${this.props.type === 0 ? ' is-active' : ''}` }
            onClick={() => this.handleClick(0) }
          >待付款</li>
          <li
            className={ `listTab${this.props.type === 1 ? ' is-active' : ''}` }
            onClick={() => this.handleClick(1) }
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
