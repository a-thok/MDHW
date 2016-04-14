import React from 'react';
import ListItem from '../../../../components/ListItem';

export default React.createClass({
  render: function () {
    let content = this.props.data.map((item, index) => (
       <ListItem
         {...item}
         key={index}
         multiple={{ '进度': item.progress, '状态': item.state }}
         title={item.title}
         small={item.type}
         emp={['目标', item.item]}
         tep="down"
       />
    ));
    return (
      <div>
        <section style={{ display: 'flex', justifyContent: 'space-around' }}>
          <p style={{ background: 'red' }} filter>待付款</p>
          <p style={{ background: 'red' }} filter>已付款</p>
        </section>
        <ul className="list list-rich">
          {content}
        </ul>
      </div>
    );
  }
});
