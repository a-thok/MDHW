import React from 'react';

export default function FormItemList(props) {
  let name = props.position || props.title;
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
            <span style={{ marginRight: '.5em',
                           fontSize: '16px' }}
            >
              {name}
            </span>{props.city}
          </p>
          <p>{props.mMiddle}</p>
          <p>{props.mBottom}</p>
        </div>
        <div>
          <p>{props.rTop}</p>
          <p>{props.rBottom}</p>
        </div>
      </div>
  );
}
