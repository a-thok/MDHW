import React from 'react';

export default function ListItem(props) {
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
        <section
          style={{
            flexShrink: '0',
            width: '92px',
            height: '92px',
            overflow: 'hidden'
          }}
        >
          <img style={{ width: '100%' }} src={props.src} alt={props.position} />
        </section>
        <section style={{ flexGrow: '1', marginLeft: '12px' }}>
          <h3 style={{ display: 'inline' }}>{props.tLeft}</h3>
          <small style={{ marginLeft: '1em' }}>{props.tRight}</small>
          <div>
            <p style={{ display: 'flex', justifyContent: 'space-between' }}>{props.m}<span>{props.mRight}</span></p>
            <p>
              <span>{props.bLeft}</span><span>{props.bMiddle}</span><span>{bRight}</span>
            </p>
          </div>
        </section>
      </div>
  );
}
