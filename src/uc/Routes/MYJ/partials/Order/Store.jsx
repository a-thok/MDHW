import React from 'react';
import Goodlist from './Goodlist.jsx';

export default function Store(props) {
  console.log(props);
  return (
    <li className="businessList_item">
      <p className="businessList_item_name">{props.stores.data.items.compayName || '创企信息科技有限公司'}</p>
      <ul>
        {props.items.map(item => <Goodlist {...item} />)}
      </ul>

       {/* <p className="businessList_item_DC">
        <span>配送方式</span>
        <span onClick={() => props.switchPanels('delivery', props.index)}>
          物流、快递<i className="fa fa-angle-right"></i>
        </span>
      </p> */}
      <p className="businessList_item_msg">
        <span>共3件商品</span>
        <span className="businessList_item_msgSpan">合计：<span>￥267</span></span>
      </p>

      <div className="dcmode" style={{ display: props.delivery ? 'block' : 'none' }}>
        <div className="dcmodeText">
          <p className="dcmodeText_title">配送方式</p>
          <p className="dcmodeText_mode">
            <span>物流、快递</span>
            <span onClick={() => props.selectionMode(true)}>
              <i className={props.isClick ? 'fa fa-check is-click' : 'fa fa-check'}></i>
            </span>
          </p>
          <p className="dcmodeText_mode">
            <span>到店自提</span>
            <span onClick={() => props.selectionMode(false)}>
              <i className={props.isClick ? 'fa fa-check' : 'fa fa-check is-click'}></i>
            </span>
          </p>
          <button className="dcmodeText_btn" type="button" onClick={() => props.switchPanels('delivery', props.index)}>关闭</button>
        </div>
      </div>
    </li>
  );
}
