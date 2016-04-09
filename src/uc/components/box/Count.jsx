import React from 'react';

const Count = React.createClass({
  getInitialState: function () {
    return { count: 0 };
  },
  handleAdd: function () {
    console.log(this.state.count);
    this.setState({
      count: this.state.count + 1
    });
  },
  handleReduce: function () {
    if (this.state.count < 1) { return;}
    this.setState({
      count: this.state.count - 1
    });
  },
  render: function () {
    // console.log(this.props.text);
    return (
      <span className="count">
        <label className="countBtn" onClick={this.handleReduce}>-</label>
        <input className="countIput" type="text" value={this.state.count} />
        <label className="countBtn" onClick={this.handleAdd}>+</label>
      </span>
    );
  }
});
export default Count;
