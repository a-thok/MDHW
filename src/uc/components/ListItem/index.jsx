import React from 'react';

export default function ListItem(props) {
  console.log(props);
  let bRight;
  if (props.tep) {
    if (props.tep === 'up') {
      bRight = <i className="fa fa-angle-up"></i>;
    }
    bRight = <i className="fa fa-angle-down"></i>;
  } else {
    bRight = props.bRight;
  }
  return (
    <div className="listItem">
        <div style={{ width: '17.3333vw',
                      height: '17.3333vw',
                      maxHeight: '130px',
                      flexShrink: '0',
                      alignSelf: 'center'
                     }}
        >
          <img style={{ width: '100%', padding: '0 .8em' }} src={props.src} alt={props.position} />
        </div>
        <div>
          <p>{props.tLeft}</p><span>{props.tRight}</span>
          <div>
            <p>{props.m}</p>
            <p>
              <span>{props.bLeft}</span><span>{props.bMiddle}</span><span ref={props.template}>{bRight}</span>
            </p>
          </div>
        </div>
      </div>
  );
}
