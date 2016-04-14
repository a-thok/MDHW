import React from 'react';
import FormItemList from '../../../../components/FormItemList';

export default function Position(props) {
  let contentList = props.data.map((item, index) => (
    <FormItemList
      {...item}
      key={index}
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
