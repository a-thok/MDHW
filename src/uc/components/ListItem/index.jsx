import React from 'react';
import Detail from './Detail';

export default function listItem(props) {
  let handleonClick = function () {
    props.onShowDetail(props.index);
  };
  const fa = props.showDetail ? <i className="fa fa-angle-up"></i> : <i className="fa fa-angle-down"></i>;
  const display = props.small ? 'inline' : 'none';

  let multipleNodes = Object.keys(props.multiple).map((item, index) => (
      <span className="multiple_item" key={index}>
        <span>{item}</span>：{props.multiple[item]}
      </span>
  ));

  return (
    <li className="list_item">
      <section className="list_item_main">
        <div className="list_item_img">
          <img src={`http://${UPLOAD_HOST}/img/${props.img}`} alt={props.position} />
        </div>
        <div className="list_item_text">
          <h3 className="list_item_title">{props.title}
            <small className="list_item_title_small" style={{ display }}>[{props.small}]</small>
          </h3>
          <p className="list_item_para">{props.emp[0]}：<span>{props.emp[1]}</span></p>
          <p className="list_item_para">
            <div>{ multipleNodes }</div>
            <div><span onClick={handleonClick}>{props.detail ? fa : props.other}</span></div>
          </p>
        </div>
      </section>
      {
        props.detail ?
          <Detail showDetail={props.showDetail} data={props.detail} /> :
          null
      }
    </li>
  );
}

