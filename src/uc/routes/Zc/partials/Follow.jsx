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
    let content = this.props.data.map((item, index) => (
       <ListItem
         key={index}
         {...item}
         img={`${item.frontpic}.jpg`}
         multiple={{ '进度': item.progress, '状态': item.status }}
         title={item.title}
         small={item.name}
         emp={['目标', item.moneys]}
         other={`￥${item.summoney}`}
       />
    ));
    return (
      <div>
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
