import React from 'react';
import ListItem from '../../../components/ListItem';
import Loading from '../../../components/Loading';
import getHash from '../../../mixins/getHash';
import scroll from '../../../mixins/scroll';
import removeWindowEvent from '../../../mixins/removeWindowEvent';

export default React.createClass({
  mixins: [getHash, removeWindowEvent],
  componentDidMount: function () {
    this.props.fetchSeller(0, false);
    window.addEventListener('scroll', this.handleScroll);
  },
  handleClick: function (type) {
    if (type === this.props.type) return;
    this.props.fetchSeller(type, true);
  },
  handleScroll: function () {
    scroll(this.props.fetchSeller);
  },
  render: function () {
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
        <Loading
          finished={this.props.finished}
          dataLen={this.props.data.length}
        />
      </div>
    );
  }
});
