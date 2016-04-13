import React from 'react';

export default React.createClass({
  render: function () {
    const height = this.props.complete ? 'auto' : '40px';
    const text = this.props.completeText ? '收起' : '查看全部';
    return (
      <div className="FormItemCompares">
        <div style={{ width: '17.3333vw',
                      height: '17.3333vw',
                      maxHeight: '130px',
                      flexShrink: '0',
                      alignSelf: 'center'
                     }}
        >
          <img style={{ width: '100%', padding: '0 .8em' }} src="#" alt={this.props.position} />
        </div>
        <div style={{ flexGrow: '1', fontSize: '14px' }}>
          <p style={{}}>
            <span style={{ color: '#3d9ccc',
                           marginRight: '.5em',
                           fontSize: '16px' }}
            >
              {this.props.position}
            </span>{this.props.company}
          </p>
          <p style={{ position: 'relative',
                      marginTop: '.8em',
                      height: height,
                      lineHeight: '20px',
                      overflow: 'hidden',
                      wordBreak: 'break-all',
                      color: '#666'
                    }}
          >
            {this.props.content}
          </p>
          <p
            style={{ marginBottom: '.5em', textAlign: 'right', color: '#3d9ccc', cursor: 'pointer' }}
            onClick={() => this.props.put(this.props.index)}
          >{text}</p>
          <p style={{ textAlign: 'right', color: '#666' }}>{this.time}</p>
        </div>
      </div>
    );
  }
});
