import React from 'react';
import ListItem from '../../../../components/ListItem';
import getHash from '../../../../mixins/getHash';
import removeWindowEvent from '../../../../mixins/removeWindowEvent';

export default React.createClass({
  mixins: [getHash, removeWindowEvent],
  componentDidMount: function () {
    this.props.onResemuList();
    window.addEventListener('scroll', this.handleScroll);
  },
  handleScroll: function () {
    console.log(1);
  },
  render: function () {
    let contentList = this.props.data.map((item, index) => (
      <ListItem
        key={index}
        {...item}
        title={item.post}
        small={item.city}
        emp={`月薪:${item.salary}`}
        other={item.state}
        multiple={{ '公司': item.company }}
        label={item.time}
      />
    ));
    return (
      <ul className="list">
        {contentList}
      </ul>
    );
  }
});
