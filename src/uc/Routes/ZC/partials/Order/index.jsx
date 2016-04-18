import React from 'react';
import ListItem from '../../../../components/ListItem';
import Loading from '../../../../components/Loading';
import getHash from '../../../../mixins/getHash';
import removeWindowEvent from '../../../../mixins/removeWindowEvent';
import ListItemDetail from '../../../../components/ListItemDetail';

export default React.createClass({
  mixins: [getHash, removeWindowEvent],
  componentDidMount: function () {
    this.props.onOrderList(0, false);
    window.addEventListener('scroll', this.handleScroll);
  },
  handleScroll: function () {
    const body = document.body;
    const remain = body.scrollHeight - body.scrollTop - window.screen.height;
    if (remain < 50) this.props.onOrderList();
  },
  handleClick: function (type) {
    if (type === this.props.type) return;
    this.props.onOrderList(type, true);
  },
  render: function () {
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
        extra={<ListItemDetail data={detail} />}
        onShowDetail={this.props.onShowDetail}
      />);
    });
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
        <Loading
          finished={this.props.finished}
          dataLen={this.props.data.length}
        />
      </div>
    );
  }
});
