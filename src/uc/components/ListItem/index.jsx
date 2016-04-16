import React from 'react';

export default function ListItem(props) {
  let handleonClick = function () {
    props.onPush(props.index);
    console.log(props.status);
  };
  let bRight;
  let extra;
  if (props.tep) {
    if (props.status) {
      bRight = <i className="fa fa-angle-down"></i>;
      extra = props.extra;
    } else {
      bRight = <i className="fa fa-angle-up"></i>;
      extra = '';
    }
  } else {
    bRight = props.other;
  }
  const display = props.small ? 'inline' : 'none';
  let multipleNodes = Object.keys(props.multiple).map((item, index) => (
      <span className="listItem_lastItem" key={index}><span>{item}</span>: {props.multiple[item]}</span>
  ));
  return (
    <li>
      <div className="listItem">
        <section className="listItem_img listItem_img-rich">
          <img src={`http://${UPLOAD_HOST}/img/${props.img}`} alt={props.position} />
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
            <div className="listItem_last_r"><span onClick={handleonClick}>{bRight}</span></div>
          </div>
        </section>
      </div>
      {extra}
    </li>
  );
}

