import React from 'react';
import ListItem from '../../../../components/ListItem';

export default function Attention(props) {
  let contentList = props.data.map((item, index) => (
    <ListItem
      key={index}
      {...item}
      multiple={{ '成交量': item.sum }}
      emp={`￥${item.money}/个`}
      small={item.type}
      other="取消关注"
    />
  ));
  return (
    <ul className="list">
      {contentList}
    </ul>
  );
}
