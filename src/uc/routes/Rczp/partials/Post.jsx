import React, { Component } from 'react';
import ListItem from '../../../components/ListItem';
import Loading from '../../../components/Loading';
import scroll from '../../../mixins/scroll';

export default class Post extends Component {
  componentDidMount() {
    this.props.fetchPost();
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }

  componentWillUnmoun() {
    window.removeEventListener('scroll', this.handleScroll.bind(this));
  }

  handleScroll() {
    scroll(this.props.fetchPost);
  }

  render() {
    let contentList = this.props.data.map((item, index) => (
      <ListItem
        key={index}
        {...item}
        img={item.logo}
        title={item.position}
        small={item.city}
        emp={['月薪', item.money]}
        other="已投递"
        multiple={{ '公司': item.compay }}
        label={item.time}
        last={['', item.publictime]}
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
}
