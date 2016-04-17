import React from 'react';
import ListItemEval from '../../../../components/ListItemEval';
import Loading from '../../../../components/Loading';
import getHash from '../../../../mixins/getHash';
import removeWindowEvent from '../../../../mixins/removeWindowEvent';

export default React.createClass({
  mixins: [getHash, removeWindowEvent],
  componentDidMount: function () {
    this.props.onEvaluateList();
    window.addEventListener('scroll', this.handleScroll);
  },
  handleScroll: function () {
    const body = document.body;
    const remain = body.scrollHeight - body.scrollTop - window.screen.height;
    if (remain < 50) this.props.onEvaluateList();
  },
  render: function () {
    let commentList = this.props.data.map((item, index) => (
      <ListItemEval
        key={index}
        index={index}
        {...item}
        onUnfold={this.props.onUnfold}
        onTooLong={this.props.onTooLong}
      />
    ));
    return (
      <div>
        <ul className="list list-eval">
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
