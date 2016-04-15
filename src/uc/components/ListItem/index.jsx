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

  const display = props.small ? 'inline' : 'none';
  let multipleNodes = Object.keys(props.multiple).map((item, index) => (
      <span className="listItem_lastItem" key={index}><span>{item}</span>: {props.multiple[item]}</span>
  ));
  return (
    <li className="listItem">
      <section className="listItem_img listItem_img-rich">
        <img src={props.img} alt={props.position} />
      </section>
      <section className="listItem_text">
        <h3 className="listItem_title listItem_title-rich">
          {props.title}
          <small style={{ display }} className="listItem_title_small">[{props.small}]</small>
        </h3>
        <p className="listItem_emp">{props.emp[0]}: <span>{props.emp[1]}</span></p>
        <div className="listItem_last">
          <div className="listItem_last_l" style={{ float: 'left' }}>
            { multipleNodes }
          </div>
          <div className="listItem_last_r"><span>{bRight}</span></div>
        </div>
      </section>
    </li>
  );
}

