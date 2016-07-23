import React, { Component } from 'react';
import ListItemPlain from '../../../components/ListItemPlain';
import Loading from '../../../components/Loading';
import scroll from '../../../mixins/scroll';

export default class Qgfollow extends Component {
  componentDidMount() {
    this.props.fetchQgfollow();
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }

  componentWillUnmoun() {
    window.removeEventListener('scroll', this.handleScroll.bind(this));
  }

  handleScroll() {
    scroll(this.props.fetchQgfollow);
  }

  render() {
    let content = this.props.data.map((item, index) => (
      <ListItemPlain
        key={index}
        info={`第${item.pcode}类`}
        title={item.title}
        elems={[
          <span>价格：￥{item.price}</span>,
          <span>收藏时间：{item.datea}</span>
        ]}
        url={item.url}
      />
    ));

    return (
      <div>
        <ul className="list list-plain">
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
