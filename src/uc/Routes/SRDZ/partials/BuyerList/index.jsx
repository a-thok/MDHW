import React from 'react';
import ListItem from '../../../../components/ListItem';
export default function BuyerList(props) {
  let contentList = props.data.map((item, index) => (
    <ListItem
      key={index}
      {...item}
      title={item.title}
      other="确认收货"
      multiple={{}}
      emp={['金额', item.money]}
      small={item.time}
    />
  ));
  return (
    <ul className="list">
      <section style={{ display: 'flex', justifyContent: 'space-around' }}>
        <p>待付款</p>
        <p>已付款</p>
      </section>
      {contentList}
    </ul>
  );
}

