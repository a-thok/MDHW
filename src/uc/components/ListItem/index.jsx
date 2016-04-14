import React from 'react';

export default function ListItem(props) {
  let bRight;
  if (props.tep) {
    if (props.tep === 'up') {
      bRight = <i className="fa fa-angle-up"></i>;
    }
    bRight = <i className="fa fa-angle-down"></i>;
  } else {
    bRight = props.other;
  }
  let multipleNodes = Object.keys(props.multiple).map((item, index) => (
    <div style={{ float: 'left' }} key={index}>
      <span>{item}</span>: {props.multiple[item]}
    </div>
  ));
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
        <img style={{ width: '100%' }} src={props.img} alt={props.position} />
      </section>
      <section style={{ flexGrow: '1', marginLeft: '12px' }}>
        <div style={{ overflow: 'hidden' }}>
          <div style={{ float: 'left' }}>
            <h3>
              {props.title}
              <small style={{ marginLeft: '1em' }}>{props.small}</small>
            </h3>
            <p>{props.emp}</p>
          </div>
          <div style={{ float: 'right' }}><span>{props.label}</span></div>
        </div>
        <div className="multiple" style={{ overflow: 'hidden' }}>
          { multipleNodes }
          <div style={{ float: 'right' }}><span>{bRight}</span></div>
        </div>
      </section>
    </div>
  );
}

