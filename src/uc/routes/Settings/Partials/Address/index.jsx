import React, { Component } from 'react';
import { Link } from 'react-router';
import Item from './Item';
import Loading from '../../../../components/Loading';
import scroll from '../../../../mixins/scroll';

export default class Address extends Component {
  componentDidMount() {
    this.props.fetchAddress();
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }

  componentWillUnmoun() {
    window.removeEventListener('scroll', this.handleScroll.bind(this));
  }

  handleScroll() {
    scroll(this.props.fetchAddress);
  }

  render() {
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
}
