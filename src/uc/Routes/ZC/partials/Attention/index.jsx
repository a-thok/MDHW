import React from 'react';
import ListItem from '../../../../components/ListItem';

export default function Attention(props) {
  let content = props.data.map((item, index) => (
       <ListItem
         key={index}
         {...item}
         multiple={{ '进度': item.progress, '状态': item.state }}
         title={item.title}
         small={item.type}
         emp={['目标', item.item]}
         other={`￥${item.total}`}
       />
    ));
  return (
    <div className="list list-rich">
      {content}
    </div>
  );
}
