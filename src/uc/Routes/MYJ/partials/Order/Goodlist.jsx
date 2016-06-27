import React from 'react';

export default function Goodlist(props) {
  return (
    <li className="businessList_itemList">
      <div className="businessList_itemList_img">
        <img src="http://tse1.mm.bing.net/th?&id=OIP.M9aabd07e87bcae3c7b124b8e5d3dcdd4o0&w=138&h=138&c=0&pid=1.9&rs=0&p=0" alt="" />
      </div>
      <div className="businessList_itemList_content">
        <p className="businessList_itemList_contentText">{props.stores.data.items.subject || '反复观看放假开房间看见他口口口诵改口费高考报名不敢开口噶口'}</p>
        <p className="businessList_itemList_contentSize">{props.stores.data.items.skuName || '尺码：38, 颜色：红'}</p>
        <p className="businessList_itemList_contentNum">
          <span className="businessList_itemList_contentNum_money">￥{props.stores.data.items.price || '89'}</span>
          <span>x{props.stores.data.items.count || '1'}</span>
        </p>
      </div>
    </li>
  );
}
