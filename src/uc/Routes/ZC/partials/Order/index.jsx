import React from 'react';
import ListItem from '../../../../components/ListItem';

export default React.createClass({
  render: function () {
    let content = this.props.data.map((data, index) => (
       <ListItem
         key={index}
         tLeft={data.title}
         tRight={`(${data.type})`}
         m={`目标:${data.item}`}
         bLeft={`进度: ${data.progress}`}
         bMiddle={`状态: ${data.state}`}
         tep="down"
       />
    ));
    return (
      <div className="List">
        <section style={{ display: 'flex', justifyContent: 'space-around' }}>
          <p style={{ background: 'red' }} filter>待付款</p>
          <p style={{ background: 'red' }} filter>已付款</p>
        </section>
        {content}
      </div>
    );
  }
});
