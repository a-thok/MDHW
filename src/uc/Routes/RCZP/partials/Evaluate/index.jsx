import React from 'react';
import ListItemEval from '../../../../components/ListItemEval';
import getHash from '../../../../mixins/getHash';
import removeWindowEvent from '../../../../mixins/removeWindowEvent';

export default React.createClass({
  mixins: [getHash, removeWindowEvent],
  componentDidMount: function () {
    this.props.onEvaluateList();
    window.addEventListener('scroll', this.handleScroll);
  },
  handleScroll: function () {
    console.log(1);
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
      <ul className="list list-eval">
        { commentList }
      </ul>
    );
  }
});
