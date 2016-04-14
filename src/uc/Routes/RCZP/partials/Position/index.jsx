import React from 'react';
import ListItem from '../../../../components/ListItem';

export default function Position(props) {
  let contentList = props.data.map((item, index) => (
    <ListItem
      key={index}
      {...item}
      mMiddle={`月薪:${item.salary}`}
      mBottom={item.company}
      rTop="已投递"
      rBottom={item.time}
      city={`[${item.city}]`}
    />
  ));
  return (
    <div className="List">
      {contentList}
    </div>
  );
}
