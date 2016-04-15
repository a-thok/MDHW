import React from 'react';
import ListItem from '../../../../components/ListItem';
import Loading from '../../../../components/Loading';
import getHash from '../../../../mixins/getHash';
import removeWindowEvent from '../../../../mixins/removeWindowEvent';

export default React.createClass({
  mixins: [getHash, removeWindowEvent],
  componentDidMount: function () {
    this.props.onFilter(0);
    this.props.onBuyerListList();
    window.addEventListener('scroll', this.handleScroll);
  },
  handleClick: function (type) {
    this.props.onFilter(type);
  },
  handleScroll: function () {
    const body = document.body;
    const remain = body.scrollHeight - body.scrollTop - window.screen.height;
    if (remain < 50) this.props.onBuyerListList();
  },
  render: function () {
    let contentList = this.props.data.map((item, index) => (
      <ListItem
        key={index}
        {...item}
        title={item.title}
        other="确认收货"
        multiple={{}}
        emp={['金额', item.money]}
        small={item.time}

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
          {contentList}
        </ul>
        <Loading finished={this.props.finished} />
      </div>
    );
  }
});

