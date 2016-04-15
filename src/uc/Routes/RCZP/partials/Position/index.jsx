import React from 'react';
import ListItem from '../../../../components/ListItem';
import Loading from '../../../../components/Loading';
import getHash from '../../../../mixins/getHash';
import removeWindowEvent from '../../../../mixins/removeWindowEvent';

export default React.createClass({
  mixins: [getHash, removeWindowEvent],
  componentDidMount: function () {
    this.props.onPositionList();
    window.addEventListener('scroll', this.handleScroll);
  },
  handleScroll: function () {
    const body = document.body;
    const remain = body.scrollHeight - body.scrollTop - window.screen.height;
    if (remain < 50) this.props.onPositionList();
  },
  render: function () {
    let contentList = this.props.data.map((item, index) => (
      <ListItem
        key={index}
        {...item}
        title={item.position}
        small={item.city}
        emp={['月薪', item.salary]}
        other="已投递"
        multiple={{ '公司': item.company }}
        label={item.time}
      />
    ));
    return (
      <div>
        <ul className="list">
          {contentList}
        </ul>
        <Loading finished={this.props.finished} />
      </div>
    );
  }
});
