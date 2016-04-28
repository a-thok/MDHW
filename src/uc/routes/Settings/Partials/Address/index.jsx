import React from 'react';
import { Link } from 'react-router';
import getHash from '../../../../mixins/getHash';
import Item from './Item';
import Loading from '../../../../components/Loading';

export default React.createClass({
  mixins: [getHash],
  componentDidMount: function () {
    this.props.fetchAddress();
  },
  render: function () {
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
        <Link className="addAddress" to="/settings/newaddress">+ 添加新地址</Link>
      </div>
    );
  }
});
