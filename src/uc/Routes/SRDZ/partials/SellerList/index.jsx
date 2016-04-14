import React from 'react';
import FormItemList from '../../../../components/FormItemList';

export default React.createClass({
  getInitialState: function () {
    let res = {
      data: [
      { img: '图1', title: '蓝牙耳机——世界上最小的立体声无线耳机', buyerName: '张三', state: '待发货', type: '科学' },
      { img: '图1', title: '蓝牙耳机——世界上最小的立体声无线耳机', buyerName: '李四', state: '待发货', type: '日常' },
      { img: '图1', title: '蓝牙耳机——世界上最小的立体声无线耳机', buyerName: '马武', state: '待发货', type: '科学' },
      { img: '图1', title: '蓝牙耳机——世界上最小的立体声无线耳机', buyerName: '午马', state: '待发货', type: '科学' }
      ]
    };
    return res;
  },
  render: function () {
    const content = this.state.data.map((data, index) => (
      <FormItemList
        key={index}
        {...data}
        mMiddle={`买家名称:${data.buyerName}`}
        mBottom={`状态:${data.state}`}
        rTop={`(${data.type})`}
      />
    ));
    return (
      <div className="List">
        {content}
      </div>
    );
  }
});
