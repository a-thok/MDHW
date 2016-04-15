import React from 'react';
import ListItem from '../../../../components/ListItem';

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
      </div>
    );
  }
});
