import React, { Component } from 'react';
import ListItemPlain from '../../../components/ListItemPlain';
import Loading from '../../../components/Loading';
import scroll from '../../../mixins/scroll';

export default class Collection extends Component {
  componentDidMount() {
    this.props.fetchCollection();
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }

  componentWillUnmoun() {
    window.removeEventListener('scroll', this.handleScroll.bind(this));
  }

  handleScroll() {
    scroll(this.props.fetchCollection);
  }

  handleClick(e, id, index) {
    e.preventDefault();
    this.props.delCollection(id, index);
  }

  render() {
    let content = this.props.data.map((item, index) => (
      <ListItemPlain
        key={index}
        info={`收藏时间:${item.collecttime}`}
        title={item.title}
        elems={[
          <span>结束时间: {item.endtime}</span>,
          <span className="list_operate" onClick={(e) => this.handleClick(e, item.id, index)}>取消收藏</span>
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
