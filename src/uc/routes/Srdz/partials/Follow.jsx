import React from 'react';
import ListItem from '../../../components/ListItem';
import Loading from '../../../components/Loading';
import getHash from '../../../mixins/getHash';
import scroll from '../../../mixins/scroll';
import removeWindowEvent from '../../../mixins/removeWindowEvent';

export default React.createClass({
  mixins: [getHash, removeWindowEvent],
  componentDidMount: function () {
    this.props.fetchFollow();
    window.addEventListener('scroll', this.handleScroll);
  },
  handleScroll: function () {
    scroll(this.props.fetchFollow);
  },
  render: function () {
    let contentList = this.props.data.map((item, index) => (
      <ListItem
        key={index}
        {...item}
        img={`${item.productlmg}.jpg`}
        multiple={{ '成交量': item.num }}
        emp={`￥${item.price}/个`}
        small={item.name}
        other="取消关注"
      />
    ));
    return (
      <div>
        <ul className="list">
          {contentList}
        </ul>
        <Loading
          finished={this.props.finished}
          dataLen={this.props.data.length}
        />
      </div>
    );
  }
});
