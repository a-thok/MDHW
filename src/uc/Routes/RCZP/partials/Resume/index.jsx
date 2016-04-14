import React from 'react';
import ListItem from '../../../../components/ListItem';

export default function Resume(props) {
  let contentList = props.data.map((item, index) => (
    <ListItem
      key={index}
      {...item}
      title={item.position}
      small={`[${item.city}]`}
      emp={`月薪:${item.salary}`}
      other="投递成功"
      multiple={{ '公司': item.company }}
      label={item.time}
    />
  ));
  return (
    <div className="List">
      {contentList}
    </div>
  );
}
