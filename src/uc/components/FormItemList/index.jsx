import React from 'react';

export default function FormItemList(props) {
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
                           fontSize: '16px' }}
            >
              {props.position}
            </span>[{props.city}]
          </p>
          <p>{props.moneyText}：{props.salary}</p>
          <p>{props.company}</p>
        </div>
        <div>
          <p>投递成功</p>
          <p>{props.time}</p>
        </div>
      </div>
  );
}
