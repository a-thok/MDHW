import React from 'react';
import { Link } from 'react-router';
import getHash from '../../../../mixins/getHash';
import Item from './Item';
import Loading from '../../../../components/Loading';
import scroll from '../../../../mixins/scroll';
import removeWindowEvent from '../../../../mixins/removeWindowEvent';

export default React.createClass({
  mixins: [getHash, removeWindowEvent],
  componentDidMount: function () {
    this.props.fetchAddress();
    window.addEventListener('scroll', this.handleScroll);
  },
  handleScroll: function () {
    scroll(this.props.fetchAddress);
  },
  render: function () {
    console.log(this.props);
    const itemNodes = this.props.data.map((item, index) => (
      <Item
        key={index}
        {...item}
      />
    ));
    return (
      <div className="addressWrapper">
        <ul className="address">
          {itemNodes}
        </ul>
        <Loading
          finished={this.props.finished}
          dataLen={this.props.data.length}
        />
        <Link className="addAddress" to="/settings/address/add">+ 添加新地址</Link>
      </div>
    );
  }
});
