import React from 'react';

export default React.createClass({
  handleTooLong: function (p) {
    if (p.scrollHeight > 40) this.props.onTooLong(this.props.index);
  },
  handleUnfold: function () {
    this.props.onUnfold(this.props.index);
  },
  render: function () {
    const height = this.props.unfold ? 'auto' : '40px';
    const text = this.props.unfold ? '收起' : '展开';
    const display = this.props.tooLong ? 'block' : 'none';
    return (
      <div className="FormItemCompares">
        <section
          style={{
            width: '17.3333vw',
            height: '17.3333vw',
            maxHeight: '130px',
            flexShrink: '0',
            alignSelf: 'center'
          }}
        >
          <img style={{ width: '100%', padding: '0 .8em' }} src="#" alt={this.props.position} />
        </section>
        <section style={{ flexGrow: '1', fontSize: '14px' }}>
          <p>
            <span
              style={{ color: '#3d9ccc',
                marginRight: '.5em',
                fontSize: '16px'
              }}
            >{this.props.position}</span>{this.props.company}
          </p>
          <p
            style={{ position: 'relative',
              marginTop: '.8em',
              height: height,
              lineHeight: '20px',
              overflow: 'hidden',
              wordBreak: 'break-all',
              color: '#666'
            }}
            ref={this.handleTooLong}
          >{this.props.content}</p>
          <p
            style={{
              marginBottom: '.5em',
              textAlign: 'right',
              color: '#3d9ccc',
              cursor: 'pointer',
              display: display
            }}
            onClick={this.handleUnfold}
          >{text}</p>
          <p style={{ textAlign: 'right', color: '#666' }}>{this.props.time}</p>
        </section>
      </div>
    );
  }
});
