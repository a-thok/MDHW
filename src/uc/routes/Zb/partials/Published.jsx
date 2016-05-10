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
        info={item.name}
        title={item.title}
        elems={[
          <span>项目金额：￥{item.totalfin}</span>,
          <span>截止时间：{item.endtime}</span>
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
