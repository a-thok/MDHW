import React from 'react';
import ListItemComment from '../../../components/ListItemComment';
import Loading from '../../../components/Loading';
import scroll from '../../../mixins/scroll';
import removeWindowEvent from '../../../mixins/removeWindowEvent';

export default React.createClass({
  mixins: [removeWindowEvent],
  componentDidMount: function () {
    this.props.fetchComment();
    window.addEventListener('scroll', this.handleScroll);
  },
  handleScroll: function () {
    scroll(this.props.fetchComment);
  },
  render: function () {
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
          { commentList }
        </ul>
        <Loading
          finished={this.props.finished}
          dataLen={this.props.data.length}
        />
      </div>
    );
  }
});
