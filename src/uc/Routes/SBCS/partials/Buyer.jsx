import React, { Component } from 'react';
import ListItem from '../../../components/ListItem';
import Loading from '../../../components/Loading';
import scroll from '../../../mixins/scroll';

export default class Buyer extends Component {
  componentDidMount() {
    this.props.fetchBuyer();
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }

  componentWillUnmoun() {
    window.removeEventListener('scroll', this.handleScroll.bind(this));
  }

  handleScroll() {
    scroll(this.props.fetchBuyer);
  }

  render() {
    let contentList = this.props.data.map((item, index) => (
      <ListItem
        key={index}
        {...item}
        title={<a className="list_operate" href={item.url}>{item.name}</a>}
        img={item.img}
        multiple={{ '交易方式': item.tradetypeName }}
        emp={['单价', item.totalFee]}
        small={item.date}
        other={item.stateName}
        index={index}
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
