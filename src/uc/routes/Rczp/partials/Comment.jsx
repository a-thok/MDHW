import React, { Component } from 'react';
import ListItemComment from '../../../components/ListItemComment';
import Loading from '../../../components/Loading';
import scroll from '../../../mixins/scroll';

export default class Comment extends Component {
  componentDidMount() {
    this.props.fetchComment();
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }

  componentWillUnmoun() {
    window.removeEventListener('scroll', this.handleScroll.bind(this));
  }

  handleScroll() {
    scroll(this.props.fetchComment);
  }

  render() {
    let commentList = this.props.data.map((item, index) => (
      <ListItemComment
        key={index}
        index={index}
        {...item}
        onUnfold={this.props.onUnfold}
        onTooLong={this.props.onTooLong}
      />
    ));
    return (
      <div>
        <ul className="list">
          {commentList}
        </ul>
        <Loading
          finished={this.props.finished}
          dataLen={this.props.data.length}
        />
      </div>
    );
  }
}
