import React, { Component } from 'react';
import ListItem from '../../../components/ListItem';
import Loading from '../../../components/Loading';
import scroll from '../../../mixins/scroll';

export default class Seller extends Component {
  componentDidMount() {
    this.props.fetchSeller(-1, 1);
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }

  componentWillUnmoun() {
    window.removeEventListener('scroll', this.handleScroll.bind(this));
  }

  handleClick(state1, state2) {
    this.props.fetchSeller(state1, state2);
  }

  handleScroll() {
    scroll(this.props.fetchSeller);
  }

  render() {
    let content = this.props.data.map((item, index) => {
      const detail = [
        { name: '收件人', text: item.receiveName },
        { name: '收货地址', text: item.receiveAddress },
        { name: '单价', text: item.total_fee / item.count },
        { name: '数量', text: item.count },
        { name: '买家留言', text: item.body },
        { name: '订单号', text: item.number },
        { name: '下单时间', text: item.date }
      ];
      return (<ListItem
        key={index}
        {...item}
        img={item.productlmg}
        index={index}
        multiple={{ '状态': item.stateName }}
        emp={['买家名称', item.receiveName]}
        title={item.projectName}
        tep="down"
        detail={detail}
        toggleDetail={this.props.toggleDetail}
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
