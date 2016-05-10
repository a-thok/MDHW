import React, { Component } from 'react';
import ListItemPlain from '../../../components/ListItemPlain';
import Loading from '../../../components/Loading';
import scroll from '../../../mixins/scroll';

export default class Published extends Component {
  componentDidMount() {
    this.props.fetchPublished();
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }

  componentWillUnmoun() {
    window.removeEventListener('scroll', this.handleScroll.bind(this));
  }

  handleScroll() {
    scroll(this.props.fetchPublished);
  }

  render() {
    let content = this.props.data.map((item, index) => (
      <ListItemPlain
        key={index}
        info={item.protype}
        small={item.status}
        title={item.title}
        elems={[
          <span className="fontColor">￥ {item.money}</span>,
          <span>{item.count}参与</span>,
          <span>{item.transaction}</span>
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
