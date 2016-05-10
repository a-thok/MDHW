import React, { Component } from 'react';
import ListItem from '../../../components/ListItem';
import Loading from '../../../components/Loading';
import scroll from '../../../mixins/scroll';

export default class Resume extends Component {
  componentDidMount() {
    this.props.fetchResume();
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }

  componentWillUnmoun() {
    window.removeEventListener('scroll', this.handleScroll.bind(this));
  }

  handleScroll() {
    scroll(this.props.fetchResume);
  }

  render() {
    let contentList = this.props.data.map((item, index) => (
      <ListItem
        key={index}
        {...item}
        img={item.logo}
        title={item.position}
        small={item.gsdz}
        emp={['月薪', item.money]}
        other={item.qysfck}
        multiple={{ '公司': item.company }}
        last={['', item.tdcgsj]}
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
