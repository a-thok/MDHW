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
    <div className="listItem_multiple_l" style={{ float: 'left' }} key={index}>
      <span>{item}</span>: {props.multiple[item]}
    </div>
  ));
  return (
    <div className="listItem">
      <section className="listItem_img">
        <img src={props.img} alt={props.position} />
      </section>
      <section className="listItem_text">
        <div className="listItem_text_t">
          <div className="listItem_text_t_l">
            <h3>
              {props.title}
              <small className="listItem_text_t_l_small">{props.small}</small>
            </h3>
            <p>{props.emp}</p>
          </div>
          <div className="listItem_text_t_r"><span>{props.label}</span></div>
        </div>
        <div className="listItem_multiple">
          { multipleNodes }
          <div className="listItem_multiple_r"><span>{bRight}</span></div>
        </div>
      </section>
    </div>
  );
}

