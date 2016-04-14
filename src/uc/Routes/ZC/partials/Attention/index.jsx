import React from 'react';
import FormItemList from '../../../../components/FormItemList';

export default function Attention(props) {
  let content = props.data.map((data, index) => (
       <FormItemList
         key={index}
         tLeft={data.title}
         tRight={`(${data.type})`}
         m={`目标:${data.item}`}
         bLeft={`进度: ${data.progress}`}
         bMiddle={`状态: ${data.state}`}
         bRight={`筹款金额: ${data.total}￥`}
       />
    ));
  return (
    <div className="List">
      {content}
    </div>
  );
}
