import React from 'react';
import ListItem from '../../../../components/ListItem';
import ListItemDetail from '../../../../components/ListItemDetail';

export default React.createClass({
  componentDidMount: function () {
    this.props.onFilter(0);
  },
  handleClick: function (type) {
    this.props.onFilter(type);
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
      </div>
    );
  }
});
