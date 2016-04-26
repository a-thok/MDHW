import React from 'react';
import Item from './Item';

export default function Detail(props) {
  const nodes = props.data.map((item, index) => <Item key={index} name={item.name} text={item.text} />);
  return (
    <section className={`list_item_detail${props.showDetail ? ' is-show' : ''}`}>
      {nodes}
        <a className="list_item_detail_link" href="#">查看详情</a>
    </section>
  );
}
