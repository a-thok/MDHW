import React from 'react';
import ListTab from '../../../components/ListTab';
import ListItem from '../../../components/ListItem';
import Loading from '../../../components/Loading';
import getHash from '../../../mixins/getHash';
import scroll from '../../../mixins/scroll';
import removeWindowEvent from '../../../mixins/removeWindowEvent';

export default React.createClass({
  mixins: [getHash, removeWindowEvent],
  componentDidMount: function () {
    this.props.fetchOrder(0, false);
    window.addEventListener('scroll', this.handleScroll);
  },
  handleScroll: function () {
    scroll(this.props.fetchOrder);
  },
  handleClick: function (type) {
    if (type === this.props.type) return;
    this.props.fetchOrder(type, true);
  },
  render: function () {
    const tabs = [{ text: '已付款', type: 0 }, { text: '待付款', type: 1 }].map(item => (
      <ListTab
        text={item.text}
        type={item.type}
        active={this.props.type}
        handleClick={this.handleClick}
      />
    ));

    let content = this.props.data.map((item, index) => {
      const detail = [
        { name: '收件人', text: item.receiveName },
        { name: '收货地址', text: item.receiveAddress },
        { name: '支持金额', text: item.cost },
        { name: '支持份数', text: item.hbcount },
        { name: '回报内容', text: item.hbcontent },
        { name: '订单号', text: item.number },
        { name: '下单时间', text: item.date }
      ];
      return (<ListItem
        {...item}
        img={`${item.frontpic}.jpg`}
        key={index}
        index={index}
        multiple={{ '进度': item.test, '状态': item.status }}
        title={item.projectName}
        small={item.typename}
        emp={['目标', item.moneyall]}
        detail={detail}
        onShowDetail={this.props.onShowDetail}
      />);
    });

    return (
      <div>
        <ul className="listTabs">
          {tabs}
        </ul>
        <ul className="list">
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
