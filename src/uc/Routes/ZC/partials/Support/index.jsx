import React from 'react';
import ListItem from '../../../../components/ListItem';
import Loading from '../../../../components/Loading';
import getHash from '../../../../mixins/getHash';
import removeWindowEvent from '../../../../mixins/removeWindowEvent';

export default React.createClass({
  mixins: [getHash, removeWindowEvent],
  componentDidMount: function () {
    this.props.onSupportList();
    window.addEventListener('scroll', this.handleScroll);
  },
  handleScroll: function () {
    const body = document.body;
    const remain = body.scrollHeight - body.scrollTop - window.screen.height;
    if (remain < 50) this.props.onSupportList();
  },
  render: function () {
    let content = this.props.data.map((item, index) => (
        <ListItem
          key={index}
          {...item}
          img={item.frontpic}
          multiple={{ '进度': item.progress, '状态': item.status }}
          title={item.title}
          small={item.name}
          emp={['目标', item.moneys]}
          other={`￥${item.supportmoney}`}
        />
      ));
    return (
      <div>
        <ul className="list">
          {content}
        </ul>
        <Loading finished={this.props.finished} />
      </div>
    );
  }
});
