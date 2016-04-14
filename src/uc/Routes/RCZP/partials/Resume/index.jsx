import React from 'react';
import ListItem from '../../../../components/ListItem';

export default function Resume(props) {
  let contentList = props.data.map((item, index) => (
    <ListItem
      key={index}
      {...item}
      tLeft={item.position}
      tRight={`[${item.city}]`}
      m={`月薪:${item.salary}`}
      mRight="投递成功"
      bLeft={item.company}
      bRight={item.time}
    />
  ));
  return (
    <div className="List">
      {contentList}
    </div>
  );
}
