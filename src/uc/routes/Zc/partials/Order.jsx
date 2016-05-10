import React, { Component } from 'react';
// import ListTab from '../../../components/ListTab';
import ListItem from '../../../components/ListItem';
import Loading from '../../../components/Loading';
import scroll from '../../../mixins/scroll';

export default class Order extends Component {
  componentDidMount() {
    this.props.fetchOrder(0, false);
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }

  componentWillUnmoun() {
    window.removeEventListener('scroll', this.handleScroll.bind(this));
  }

  handleScroll() {
    scroll(this.props.fetchOrder);
  }

  handleClick(state1, state2) {
    this.props.fetchOrder(state1, state2);
  }

  render() {
    // const tabs = [{ text: '已付款', type: 0 }, { text: '待付款', type: 1 }].map(item => (
    //   <ListTab
    //     text={item.text}
    //     type={item.type}
    //     active={this.props.type}
    //     handleClick={this.handleClick}
    //   />
    // ));

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
        emp={['目标', `￥${item.moneyall}`]}
        detail={detail}
        toggleDetail={this.props.toggleDetail}
        last={['筹款金额', `￥${item.moneySum}`]}
      />);
    });

    return (
      <div>
        <ul className="listTabs">
          <li
            className={`listTab${this.props.type === 0 ? ' is-active' : ''}`}
            onClick={() => this.handleClick(-1, 1)}
          >待付款</li>
          <li
            className={`listTab${this.props.type === 1 ? ' is-active' : ''}`}
            onClick={() => this.handleClick(0, 5)}
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
}
