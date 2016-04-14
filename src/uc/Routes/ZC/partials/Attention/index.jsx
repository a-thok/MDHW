import React from 'react';
import ListItem from '../../../../components/ListItem';

export default function Attention(props) {
  let content = props.data.map((item, index) => (
       <ListItem
         key={index}
         {...item}
         multiple={{ '进度': item.progress, '状态': item.state }}
         title={item.title}
         label={`(${item.type})`}
         emp={`目标:${item.item}`}
         other={`筹款金额: ${item.total}￥`}
       />
    ));
  return (
    <div className="List">
      {content}
    </div>
  );
}
