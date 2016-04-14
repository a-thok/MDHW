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
        <section
          style={{
            flexShrink: '0',
            width: '92px',
            height: '92px',
            overflow: 'hidden'
          }}
        >
          <img style={{ width: '100%' }} src={this.props.img} alt={this.props.position} />
        </section>
        <section style={{ flexGrow: '1', marginLeft: '12px' }}>
          <h3>
            {this.props.position}
            <small style={{ marginLeft: '1em' }}>{this.props.company}</small>
            <span
              className="listItem_unfold"
              style={{ display, float: 'right', cursor: 'pointer' }}
              onClick={this.handleUnfold}
            >{text}</span>
          </h3>
          <p
            className="listItem_content"
            style={{
              height,
              marginTop: '.5em',
              overflow: 'hidden',
              lineHeight: '16px',
              wordBreak: 'break-all'
            }}
            ref={this.handleTooLong}
          >{this.props.content}</p>
          <p style={{ textAlign: 'right', lineHeight: '1.8' }}>{this.props.time}</p>
        </section>
      </div>
    );
  }
});
