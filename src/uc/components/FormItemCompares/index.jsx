import React from 'react';

export default function FormItemCompares(props) {
  const height = props.complete ? 'auto' : '40px';
  const text = props.completeText ? '收起' : '查看全部';
  return (
    <div className="FormItemCompares">
      <div style={{ width: '17.3333vw',
                    height: '17.3333vw',
                    maxHeight: '130px',
                    flexShrink: '0',
                    alignSelf: 'center'
                    }}
      >
        <img style={{ width: '100%', padding: '0 .8em' }} src="#" alt={props.position} />
      </div>
      <div style={{ flexGrow: '1', fontSize: '14px' }}>
        <p>
          <span style={{ color: '#3d9ccc',
                         marginRight: '.5em',
                         fontSize: '16px'
                        }}
          >
            {props.position}
          </span>{props.company}
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
          {props.content}
        </p>
        <p
          style={{ marginBottom: '.5em', textAlign: 'right', color: '#3d9ccc', cursor: 'pointer' }}
          onClick={() => props.put(props.index)}
        >{text}</p>
        <p style={{ textAlign: 'right', color: '#666' }}>{props.time}</p>
      </div>
    </div>
  );
}
