import React from 'react';

export default function Basics(props) {
  let liStyle = {
    float: 'left',
    width: '33.3333%',
    textAlign: 'center',
    height: '100%'
  };
  let imgStyle = {
    width: '12vw',
    height: '12vw',
    borderRadius: '50%'
  };
  return (
    <ul
      className="basics"
      style={{
        overflow: 'hidden'
      }}
    >
      <li style={liStyle}>
        <div className="basics_content">
          <div>
            <img style={imgStyle} src="#" alt="消息" />
          </div>
          <div>消息</div>
          <div className="basics_num">{props.msg}</div>
        </div>
      </li>
      <li style={liStyle}>
        <div className="basics_content">
          <div>
            <img style={imgStyle} src="#" alt="好友" />
          </div>
          <div>好友</div>
          <div className="basics_num">{props.frd}</div>
        </div>
      </li>
      <li style={liStyle}>
        <div className="basics_content">
          <div>
            <img style={imgStyle} src="#" alt="余额" />
          </div>
          <div>余额</div>
          <div className="basics_num">￥{props.money.toFixed(2)}</div>
        </div>
      </li>
    </ul>
  );
}
