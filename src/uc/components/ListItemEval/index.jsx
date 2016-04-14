import React from 'react';

export default React.createClass({
  handleTooLong: function (p) {
    setTimeout(() => {
      if (p.scrollHeight > 48) this.props.onTooLong(this.props.index);
    });
  },
  handleUnfold: function () {
    this.props.onUnfold(this.props.index);
  },
  render: function () {
    const height = this.props.unfold ? 'auto' : '48px';
    const display = this.props.tooLong ? 'inline' : 'none';
    const text = this.props.unfold ? '收起' : '展开';
    return (
      <div className="listItem">
        <section className="listItem_img">
          <img src={this.props.img} alt={this.props.position} />
        </section>
        <section className="listItem_text">
          <h3>
            {this.props.position}
            <small className="listItem_text_t_l_small">{this.props.company}</small>
            <span
              className="listItem_unfold"
              style={{ display }}
              onClick={this.handleUnfold}
            >{text}</span>
          </h3>
          <p
            className="listItem_content"
            style={{ height }}
            ref={this.handleTooLong}
          >{this.props.content}</p>
          <p className="listItem_time">{this.props.time}</p>
        </section>
      </div>
    );
  }
});
