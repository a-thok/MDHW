import React from 'react';
import ListItem from '../../../../components/ListItem';
import ListItemDetail from '../../../../components/ListItemDetail';

export default function SellerList(props) {
  const content = props.data.map((item, index) => (
    <ListItem
      key={index}
      {...item}
      multiple={{ '状态': item.state }}
      emp={['买家名称', item.buyerName]}
      small={item.type}
      tep="down"
      extra={<ListItemDetail />}
    />
  ));
  return (
    <div>
      <section style={{ display: 'flex', justifyContent: 'space-around' }}>
        <p>待付款</p>
        <p>已付款</p>
      </section>
      <ul className="list">
        {content}
      </ul>
    </div>
  );
}
